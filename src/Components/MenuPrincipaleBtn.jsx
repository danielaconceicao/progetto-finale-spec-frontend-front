import { useNavigate } from 'react-router-dom';

export default function MenuPrincipaleBtn() {
    const navigate = useNavigate();

    return (
        <>
            <div onClick={() => navigate('/')} className="i-details" style={{paddingLeft: '.1rem'}}>
                <button type="button" className="btn btn-primary">menu principale</button>
            </div>
        </>
    )
}