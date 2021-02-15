import './Home.css'
import { useHistory } from 'react-router-dom';

const Home = () => {
    const history = useHistory();


    const handlePushRegistro = () => {
        history.push('/registro');
    }
    const handlePushLogin = () => {
        history.push('/login');
    }

    return (
        <div className="home">
            <h1 className="Home-title">Inicio</h1>
            <div className="home-container">
                <input type="button" className="home-button" onClick={handlePushRegistro} value="registro" />
                <input type="button" className="home-button" onClick={handlePushLogin} value="login" />
            </div>
        </div>
    )
}

export default Home
