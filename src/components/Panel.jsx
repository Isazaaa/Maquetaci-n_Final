import { Link, useNavigate } from 'react-router-dom';
import './Panel.css';

const Panel = () => {
    const navigate = useNavigate(); // Inicializa useNavigate

    const handleLogout = () => {
        // Aquí puedes agregar la lógica para limpiar el estado del usuario
        navigate('/'); // Redirige a Home
    };

    return (
        <div className="panel-layout">
            {/* Barra Superior */}
            <div className="top-bar">
                <button className="cerrar-sesion" onClick={handleLogout}>Cerrar Sesión</button>
            </div>

            {/* Panel Principal */}
            <div className="main-container">
                {/* Sidebar */}
                <div className="sidebar">
                    <button className="sidebar-btn">Servicios</button>
                    <button className="sidebar-btn">Contacto</button>
                </div>

                {/* Contenido Principal */}
                <div className="content">
                    <h2 className="content-title">Este es el panel principal</h2>
                    <div className="panels-container">
                        <div className="panel-item"></div>
                        <div className="panel-item"></div>
                        <div className="panel-item"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Panel;
