import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "../context/AppContext";

export default function RecordFiltered() {
    const context = useContext(AppContext);
    const navigate = useNavigate();

    if (!context) {
        throw new Error("AppContext deve essere utilizzato all'interno di un AppProvider");
    }

    const { data, filteredData } = context;
    return (
        <>
            {filteredData && filteredData.length > 0 ? (
            <div className='d-flex ps-5 flex-wrap gap-5 row-cols-1 row-cols-md-3 g-4'>
                {data?.map(record => (
                    <div onClick={() => navigate(`softwares/${record.id}`)} className="card" style={{ width: '16rem', backgroundColor: 'rgb(77, 77, 77)', color: 'white' }} key={record.id}>
                        <img src={record.img} className="card-img-top" alt={record.title} />
                        <div className="card-body">
                            <h5 className="card-title">{record.title}</h5>
                            <span>{record.category}</span>
                        </div>
                    </div>
                ))}
            </div>
            ) : (
            <p className="ps-5 pt-3 text-white">Nessun record trovato</p>
            )}
        </>
    )
}