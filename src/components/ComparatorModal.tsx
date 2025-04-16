import { ModalProps } from '../types/RecordTypes';
import Date from '../components/Date';


const ComparatorModal = ({ software, onClose }: ModalProps) => {
    if (software.length < 2) {
        return (
            <div className="modal fade show" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Errore</h5>
                            <button type="button" className="btn-close" onClick={onClose}></button>
                        </div>
                        <div className="modal-body">
                            <p>Seleziona almeno due software per confrontare.</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={onClose}>Chiudi</button>
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
                        <button type="button" className="btn-close" onClick={onClose}></button>
                    </div>
                    <div className="modal-body" style={{ display: 'flex', justifyContent: 'space-around' }}>
                        {software.map((record, index) => (
                            <div key={record.id} style={{ border: '1px solid #ccc', padding: '10px', width: '45%' }}>
                                <h3>Software {index + 1}</h3>
                                <p>Titolo: {record.title}</p>
                                <p>Categoria: {record.category}</p>
                                <p>Prezzo: {record.price}€</p>
                                <p>Sviluppatore: {record.developer}</p>
                                <p>Piattaforme: {record.platform.join(', ')}</p>
                                <p>Descrizione: {record.description}</p>
                                <p>Anno: {record.releaseYear}</p>
                                <Date/>
                                
                            </div>
                        ))}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={onClose}>Chiudi</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ComparatorModal;