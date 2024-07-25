import './Header.css'
import { useNavigate } from 'react-router-dom';

function Header() { 
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/signin');
    };
    return ( 
        <> 
            <div className="container">
                <img src="https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-web.imgix.net%2Fstatic%2Fimg%2Fwhite-logo.png%3Fauto%3Dcompress%2Cformat%26fit%3Dmax%26w%3D121%26h%3D40%26dpr%3D2%26fm%3Dpng&w=256&q=75" alt="Zé delivery logo" />
                <button onClick={handleLoginClick}>Entrar</button>
            </div>
        </> 

    ) 
} 

export default Header