import { useContext } from "react";
import AppContext from "../context/AppContext";
import MenuPrincipaleBtn from "../Components/MenuPrincipaleBtn";
import SoftwareCardList from "../Components/SoftwareCards";
import OpenModalBtn from "../Components/OpenModalBtn";
import Modal from "../Components/Modal";


export default function PreferredSoftware() {
    const { softwares, favoriteCards, isModalVisible } = useContext(AppContext);

    const likedSoftware = softwares.filter(software => favoriteCards.includes(software.id));

    return (
        <>
            <div className="d-flex py-3">
                <MenuPrincipaleBtn />
                <OpenModalBtn />
            </div>

            <SoftwareCardList softwares={likedSoftware} emptyMessage={"Nessuna card aggiunta ai preferiti"} fromPage={'preferiti'} />

            {isModalVisible && <Modal />}
        </>
    )
}