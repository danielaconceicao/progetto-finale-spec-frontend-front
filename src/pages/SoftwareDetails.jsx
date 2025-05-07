import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import AppContext from "../context/AppContext";
import MenuPrincipaleBtn from "../Components/MenuPrincipaleBtn";

export default function SoftwareDetails() {
    const { id } = useParams();
    const { softwares } = useContext(AppContext);
    const navigate = useNavigate();
    const location = useLocation();

    const softwareDetails = softwares.find(software => software.id === Number(id));

    if (!softwareDetails) return <p>Carricando...</p>

    const handleClickReturn = () => {
        navigate(-1);
    }

    const showButtonReturn = location.state && location.state.from === 'preferiti';

    return (
        <>

            <img className="img-details" src={softwareDetails.img} alt={softwareDetails.title} />
            <div className="record-details">

                <p><strong>Categoria</strong>: {softwareDetails.category}</p>
                <p><strong>Prezzo</strong>: {softwareDetails.price}€</p>
                <p><strong>Anno</strong>: {softwareDetails.releaseYear}</p>
                <p><strong>Piattaforma</strong>: {softwareDetails.platform.join(', ')}</p>
                <p><strong>Descrizione</strong>: {softwareDetails.description}</p>
                <p><strong>Data Creazione</strong>: {new Date(softwareDetails.createdAt).toLocaleDateString()}</p>


                <MenuPrincipaleBtn />

                {showButtonReturn && (
                    <button type="button" className="btn btn-primary mt-2" onClick={handleClickReturn}>
                        <i className="bi bi-arrow-return-left"></i>
                    </button>
                )}
            </div>
        </>
    )
}