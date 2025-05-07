import { useContext } from 'react';
import AppContext from "../context/AppContext";

export default function OrderedClick() {
    const { handleOrderedClick, orderedTitle } = useContext(AppContext);

    return (
        <div>
            <button className="btn btn-primary" type="button" onClick={handleOrderedClick}>
                ordena per titulo
                {orderedTitle ?
                    <i className="bi bi-arrow-up-short"></i> :
                    <i className="bi bi-arrow-down-short"></i>
                }
            </button>
        </div>
    )
}