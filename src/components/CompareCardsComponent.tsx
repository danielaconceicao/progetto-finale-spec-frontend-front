import { useContext } from "react";
import AppContext from "../context/AppContext";

export default function CompareCardBtn() {
    const modalVisibile = useContext(AppContext);
    
    if (!modalVisibile) {
        throw new Error("AppContext deve essere utilizzato all'interno di un AppProvider");
    }

    const {setIsModalVisibile} = modalVisibile;

    const openModal = () => {
        setIsModalVisibile(true);
    }

    return (
        <>
            <button onClick={() => openModal()} type="button" className="btn btn-primary">Confrontare records</button>
        </>
    )
}