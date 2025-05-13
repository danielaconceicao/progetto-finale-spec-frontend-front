import { memo } from "react";
import { useNavigate } from "react-router-dom";

const SoftwareDetailsComponent = memo(({ software, fromPage }) => {
    const navigate = useNavigate();

    const handleClickSoftwareId = () => {
        navigate(`/software/${software.id}`, { state: { from: fromPage } })
    }
    return (

        <button type="button" class="btn btn-primary" onClick={handleClickSoftwareId}>
            <i className="bi bi-eye"></i>
        </button>

    )
});

export default SoftwareDetailsComponent;