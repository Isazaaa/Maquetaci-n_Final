import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Datos de usuario quemados
  const users = [
    { user: 'admin', password: '1234', name: 'Juan' },
    { user: 'user1', password: '0000', name: 'Natasha' },
  ];

  const handleLogin = () => {
    const foundUser = users.find(
      (user) => user.user === username && user.password === password
    );

    if (foundUser) {
      Swal.fire({
        title: 'Bienvenido!',
        text: `Hola, ${foundUser.name}!`,
        icon: 'success',
        timer: 2000,
        timerProgressBar: true,
        willClose: () => navigate('/panel'),
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Usuario y/o contraseña incorrecto',
      });
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={(e) => e.preventDefault()}>
        <div className="image-container">
          <img src="/usuario.PNG" alt="Usuario" />
        </div>
        <div className="form">
          <div className="input-group">
            <input
              type="text"
              placeholder="Usuario"
              className="form-input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              placeholder="Contraseña"
              className="form-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <input type="button" className="submit-btn" value="Login" onClick={handleLogin} />
          <Link to="/register" className="login-link">¿No tienes cuenta?</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
