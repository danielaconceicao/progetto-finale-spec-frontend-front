import { useNavigate } from "react-router-dom";
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function FavoriteComponent() {
    const navigate = useNavigate();

    const handleFavoritePage = () => {
        navigate('/favorite');
    }

    return (
        <>
            <div style={{ cursor: 'pointer' }}>
                <FontAwesomeIcon onClick={() => handleFavoritePage()} icon={faHeart} className='likes' />
            </div>
        </>
    )
}