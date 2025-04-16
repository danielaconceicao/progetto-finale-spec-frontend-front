import { SearchProps } from '../types/RecordTypes';
import { useRef, useState, useMemo } from 'react';
import Debounce from './Debouce';

export default function SearchBar({ SearchInputChange }: SearchProps) {
    const inputRef = useRef<HTMLInputElement>(null);
    const [isVisibile, setIsVisibile] = useState<boolean>(false);
    const [searchTerm, setSearchTerm] = useState<string>('');

    
    const debouncedHandleInputChangeHandler = useMemo(() =>
        Debounce((query: string) => {
            SearchInputChange(query);
        }, 500),
        [SearchInputChange] 
    );

    function handleClick() {
        setIsVisibile(!isVisibile);
        if (inputRef.current) {
            inputRef.current.className = isVisibile ? 'd-none' : 'd-inline-block';
        }
        if (isVisibile) {
            setSearchTerm('');
            debouncedHandleInputChangeHandler(''); 
        }
    }

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
        debouncedHandleInputChangeHandler(event.target.value);
    };

    return (
        <>
            <div className='search-card '>
                <i className="bi bi-search search-icon" onClick={handleClick}></i>
                <input
                    type="text"
                    ref={inputRef}
                    placeholder="search record"
                    className={isVisibile ? 'd-inline-block' : 'd-none'}
                    value={searchTerm}
                    onChange={handleInputChange}
                />
            </div>
        </>
    );
}