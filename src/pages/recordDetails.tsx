import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Software, ApiResponse } from '../types/RecordTypes';
const API_URL = process.env.REACT_APP_API_URL;

export default function RecordDetails() {
    const { id } = useParams();
    const [recordId, setRecordId] = useState<Software | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        async function fecthRecord() {
            try {
                const response = await fetch(`${API_URL}/${id}`);

                const data: ApiResponse = await response.json();

                if (data && data.success && data.software) {
                    setRecordId(data.software);
                    console.log(data.success, data.software)
                } else {
                    setRecordId(null);
                }

            } catch (err) {
                if (err instanceof Error) {
                    console.error(err);
                }
            }
        }
        fecthRecord();
    }, [id]);

    return (
        <div>
            {recordId && (
                <>
                    <div className="d-flex">
                        <div onClick={() => navigate('/')} className="i-details"><i className="bi bi-arrow-left"></i></div>
                        <h5 className="title-details">{recordId.title}</h5>
                    </div>
                    <img className="img-details" src={recordId.img} alt={recordId.title} />
                    <div className="record-details">

                        <p><strong>Categoria</strong>: {recordId.category}</p>
                        <p><strong>Prezzo</strong>: {recordId.price}€</p>
                        <p><strong>Anno</strong>: {recordId.releaseYear}</p>
                        <p><strong>Piattaforma</strong>: {recordId.platform.join(', ')}</p>
                        <p><strong>Descrizione</strong>: {recordId.description}</p>
                        <p><strong>Data Creazione</strong>: {new Date(recordId.createdAt).toLocaleDateString()}</p>
                    </div>
                </>
            )}
        </div>
    )
}