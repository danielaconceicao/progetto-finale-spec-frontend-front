import { useContext } from "react";
import AppContext from "../context/AppContext";
import { memo } from "react";


const InputChecked = memo(({ software }) => {
    const { cardsId, setCardsId } = useContext(AppContext);

    const handleCheckboxChange = (id, isChecked) => {
        if (isChecked) {
            setCardsId([...cardsId, id]);
        } else {
            setCardsId(cardsId.filter(selectedId => selectedId !== id));
        }
    }

    return (
        <input
            className="form-check-input mx-2"
            type="checkbox"
            value={software.id}
            checked={cardsId.includes(software.id)}
            id={`checkDefault-${software.id}`}
            onChange={e =>
                handleCheckboxChange(software.id, e.target.checked)
            }
        />
    )
})

export default InputChecked;