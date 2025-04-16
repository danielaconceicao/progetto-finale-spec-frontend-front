import { useContext } from "react";
import AppContext from "../context/AppContext";
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';

export default function AllRecords() {
    const context = useContext(AppContext);
    const navigate = useNavigate();


    if (!context) {
        throw new Error("AppContext deve essere utilizzato all'interno di un AppProvider");
    }

    const { data, isLiked, removeLike, addLike, idCards, setIdCards } = context;

    const handleCheckboxChange = (id: number, isChecked: boolean) => {
        if (isChecked) {
            setIdCards([...idCards, id]);
        } else {
            setIdCards(idCards.filter(selectedId => selectedId !== id));
        }
    }

    const handleClickLike = (recordId: number) => {

        if (document.activeElement instanceof HTMLElement) {
            document.activeElement.blur();
        }

        if (isLiked(recordId)) {
            removeLike(recordId);
            console.log(`Removed like for card ID: ${recordId}`);
        } else {
            addLike(recordId);
            console.log(`Added like for card ID: ${recordId}`);
        }
    }

    const categories = [...new Set(data?.map(record => record.category) || [])]
    const orderedCategories = categories.sort((a, b) => a.localeCompare(b));

    return (
        <>
            {orderedCategories.map(category => (
                <div key={category}>
                    <p className='ps-3'>{category}</p>
                    <div className='d-flex ps-5 flex-wrap gap-5 row-cols-1 row-cols-md-3 g-4'>
                        {data?.filter(record => record.category === category).map(record => (
                            <div className="card" style={{ width: '18rem', backgroundColor: 'rgb(77, 77, 77)', color: 'white' }} key={record.id}>
                                <div onClick={() => navigate(`softwares/${record.id}`)}>
                                    <img src={record.img} className="card-img-top" alt={record.title} />
                                    <div className="card-body">
                                        <h5 className="card-title">{record.title}</h5>
                                    </div>
                                </div>

                                <div className="form-check m-3 d-flex justify-content-between align-items-center">
                                    <div>
                                        <label className="form-check-label" htmlFor={`checkDefault-${record.id}`}>
                                            Seleziona per confrontare
                                        </label>
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value={record.id}
                                            checked={idCards.includes(record.id)}
                                            id={`checkDefault-${record.id}`}
                                            onChange={e => handleCheckboxChange(record.id, e.target.checked)}
                                        />
                                    </div>
                                    <div>
                                        <FontAwesomeIcon
                                            onClick={() => handleClickLike(record.id)}
                                            icon={isLiked(record.id) ? faHeartSolid : faHeartRegular} className={`like ${isLiked(record.id) ? 'liked' : ''}`}
                                            style={{ color: isLiked(record.id) ? 'red' : 'white', cursor: 'pointer' }}
                                        />

                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                
            ))}
        </>
    )
}