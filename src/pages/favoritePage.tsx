import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Software } from "../types/RecordTypes";
import AppContext from "../context/AppContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';

const API_URL = process.env.REACT_APP_API_URL;

export default function FavoritePage() {
    const [allRecords, setAllRecords] = useState<Software[]>([]);
    const context = useContext(AppContext);
    const navigate = useNavigate();

    if (!context) {
        throw new Error("AppContext deve ser usado dentro de um AppProvider");
    }

    const { favoriteCardsIds, isLiked, removeLike, addLike } = context;

    const getRecords = async () => {
        try {
            const response = await fetch(`${API_URL}`);

            const data: Software[] = await response.json();

            setAllRecords(data);
        } catch (error) {
            if (error instanceof Error) {
                console.error(error);
            }
        }
    };

    useEffect(() => {
        getRecords();
    }, []);

    const favoriteRecords = allRecords.filter(record => favoriteCardsIds.includes(record.id));

    const handleClickLike = (recordId: number) => {
        if (isLiked(recordId)) {
            removeLike(recordId);
        } else {
            addLike(recordId);
        }
    }

    return (
        <div className="p-5">
            <h2 className="text-white mb-4">I tuoi preferiti</h2>

            {favoriteRecords.length === 0 ? (
                <p className="text-white">Nessun software aggiunto ai preferiti.</p>
            ) : (
                <div className='d-flex flex-wrap gap-5'>
                    {favoriteRecords.map(record => (
                        <div
                            className="card"
                            style={{ width: '18rem', backgroundColor: 'rgb(77, 77, 77)', color: 'white' }}
                            key={record.id}
                        >
                            <div onClick={() => navigate(`/softwares/${record.id}`)} style={{ cursor: "pointer" }}>
                                <img src={record.img} className="card-img-top" alt={record.title} />
                                <div className="card-body">
                                    <h5 className="card-title">{record.title}</h5>
                                    <p className="card-text">{record.category}</p>
                                </div>
                            </div>

                            <div className="card-footer d-flex justify-content-end">
                                <FontAwesomeIcon
                                    onClick={() => handleClickLike(record.id)}
                                    icon={isLiked(record.id) ? faHeartSolid : faHeartRegular}
                                    style={{
                                        color: isLiked(record.id) ? 'red' : 'white',
                                        cursor: 'pointer'
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            )}

            <button onClick={() => navigate('/')} type="button" className="btn btn-secondary" style={{ margin: '1rem 0' }}>previous</button>
        </div>
    );
}