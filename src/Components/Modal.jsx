import { useContext } from "react";
import AppContext from "../context/AppContext";

const ComparatorModal = () => {
    const { softwares, setIsModalVisible, setCardsId, cardsId } = useContext(AppContext);
    

    const onCloseModal = () => {
        setIsModalVisible(false);
        setCardsId([]);
    }

    const selectedSoftwares = softwares.filter(software => cardsId.includes(software.id));

  /*   if (!isModalVisible) {
        return null; // Non renderizzare il modal se non è visibile
    } */

    if (selectedSoftwares.length < 2) {
        return (
            <div className="modal fade show" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Errore</h5>
                            <button type="button" className="btn-close" onClick={onCloseModal}></button>
                        </div>
                        <div className="modal-body">
                            <p>Seleziona almeno due software per confrontare.</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={onCloseModal}>Chiudi</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="modal fade show" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}>
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Confronto Records</h5>
                        <button type="button" className="btn-close" onClick={onCloseModal}></button>
                    </div>
                    <div className="modal-body" style={{ display: 'flex', justifyContent: 'space-around' }}>
                        {selectedSoftwares.map((record, index) => (
                            <div key={record.id} style={{ border: '1px solid #ccc', padding: '10px', width: '45%' }}>
                                <h3>Software {index + 1}<strong>({record.title})</strong></h3>
                                <p>Categoria: {record.category}</p>
                                <p>Prezzo: {record.price}€</p>
                                <p>Sviluppatore: {record.developer}</p>
                                <p>Piattaforme: {record.platform.join(', ')}</p>
                                <p>Descrizione: {record.description}</p>
                                <p>Anno: {record.releaseYear}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ComparatorModal;