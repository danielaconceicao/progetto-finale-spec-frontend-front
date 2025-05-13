import { useContext } from "react";
import AppContext from "../context/AppContext";
import OrderedClick from "../Components/OrderedClick";
import FilterAndSearch from "../Components/FilterAndSearch";
import { useNavigate } from "react-router-dom";
import OpenModalBtn from '../Components/OpenModalBtn';
import Modal from '../Components/Modal';
import SoftwareCardList from '../Components/SoftwareCards';

export default function Software() {
    const { getFilteredSoftwares, isModalVisible } = useContext(AppContext);
    const navigate = useNavigate();

    const handleClickPreferiti = () => {
        navigate('/preferiti');
    }

    return (
        <>
            {/* sidebar OrderClick, preferiti, comparatore, filterCards */}
            <div className="d-flex justify-content-between pt-3 pb-5 px-2 flex-wrap gap-2">
                <div className="d-flex">
                    <OrderedClick />
                    <button onClick={handleClickPreferiti} type="button" className="btn btn-primary ms-3">Preferiti</button>
                    <OpenModalBtn />
                </div>
                <FilterAndSearch />
            </div>

            {/* Lista dei record, che mostra le proprietà title e category */}
            <SoftwareCardList softwares={getFilteredSoftwares} emptyMessage={'Nessun risultado trovato'}/>
            
            {isModalVisible && <Modal />}
        </>
    );
}