import { useContext, useMemo } from "react";
import AppContext from "../context/AppContext";
import ComparatorModal from '../components/ComparatorModal'; 

export default function ModalComponent() {
    const context = useContext(AppContext);

    if(!context){
        throw new Error("AppContext deve essere utilizzato all'interno di un AppProvider");
    }

    const {data, setIsModalVisibile, isModalVisibile, idCards, setIdCards} = context;

    const RecordToCompare = useMemo(() => {
        if (data) {
            return data.filter(record => idCards.includes(record.id));
        }
        return []
    }, [data, idCards]);

    const CloseModal = () => {
        setIsModalVisibile(false);
        setIdCards([]);
    }
    
    return (
        <>
            {isModalVisibile && (
                <ComparatorModal
                    software={RecordToCompare}
                    onClose={CloseModal}
                />
            )}
        </>
    )
}