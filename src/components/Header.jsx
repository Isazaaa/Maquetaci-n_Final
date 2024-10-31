import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
    return (
        <header className="encabezado">
            <Link className='enlace' to="/login">Iniciar Sesión</Link>
            <Link className='enlace' to="/register">Registrarse</Link>
        </header>
    )
}

export default Header