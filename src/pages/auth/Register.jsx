import { Link, useNavigate } from 'react-router-dom'
import './Register.css'


const Register = () => {
    return (
        <div className="register-container">
            <div className="register-form">
                <div className="image-container">
                    <img src="/usuario.PNG" alt="Usuario" />
                </div>
                
                <form className="form">
                    <div className="input-group">
                        <input 
                            type="text" 
                            placeholder="Usuario" 
                            className="form-input"
                        />
                    </div>
                    <div className="input-group">
                        <input 
                            type="password" 
                            placeholder="Contraseña"
                            className="form-input"
                        />
                    </div>
                    <div className="input-group">
                        <input 
                            type="email" 
                            placeholder="Correo"
                            className="form-input"
                        />
                    </div>
                    <div className="input-group">
                        <input 
                            type="text" 
                            placeholder="Nombre"
                            className="form-input"
                        />
                    </div>
                    
                    <button type="submit" className="submit-btn">
                        Crear Cuenta
                    </button>
                    
                    <Link to="/login" className="login-link">
                        ¿Ya tiene cuenta?
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default Register