import './Header.css'
import { useHistory } from 'react-router-dom';

const Header = () => {
    const history = useHistory();
    const pushHome = () => {
        history.push('/');
    }

    return (
        <header className="header">
            <span className="header-logo" onClick={pushHome}>proyecto</span>
        </header>
    )
}

export default Header