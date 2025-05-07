import { useContext } from "react";
import AppContext from "../context/AppContext";

export default function CompareCardBtn() {
    const { setIsModalVisible } = useContext(AppContext);

    const openModal = () => {
        setIsModalVisible(true);
    }

    return (
        <>
            <button onClick={() => openModal()} type="button" className="btn btn-primary ms-3">Confrontare records</button>
        </>
    )
}