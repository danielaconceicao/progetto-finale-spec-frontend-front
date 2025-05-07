import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import { useContext, memo } from 'react';
import AppContext from '../context/AppContext';


const FontAwesome = memo(({ software }) => {
    const { isLiked, handleClickLike } = useContext(AppContext)
    return (
        <FontAwesomeIcon
            onClick={() => handleClickLike(software.id)}
            icon={isLiked(software.id) ? faHeartSolid : faHeartRegular}
            className={`like ${isLiked(software.id) ? 'liked' : ''} px-2`}
            style={{
                color: isLiked(software.id) ? 'red' : 'black',
                cursor: 'pointer'
            }}
        />
    )
});

export default FontAwesome;