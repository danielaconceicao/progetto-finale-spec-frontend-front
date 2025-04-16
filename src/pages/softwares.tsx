import { useContext } from 'react';
import AppContext from '../context/AppContext';
import CarouselSlides from '../components/CarouselSlidesComponents';
import SearchBar from '../components/SearchBar';
import FavoriteComponent from '../components/FavoriteComponent';
import CompareCardBtn from '../components/CompareCardsComponent';
import RecordFiltered from '../components/RecordFiltered';
import AllRecords from '../components/AllRecords';
import ModalComponent from '../components/Modal';


export default function Softwares() {
    const context = useContext(AppContext);

    if (!context) {
        throw new Error("AppContext deve essere utilizzato all'interno di un AppProvider");
    }

    const { filterData, setFilterData } = context;

    return (
        <div className='allSoftware-card'>
            <CarouselSlides />

            <div className='sideBar'>
                <SearchBar SearchInputChange={setFilterData} />
                <FavoriteComponent />
                <CompareCardBtn />
            </div>


            {filterData ? (
                <RecordFiltered />
            ) : (
                <>
                    <AllRecords />
                </>
            )}

            <ModalComponent />
        </div>

    )
}