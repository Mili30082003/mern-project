import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Asegúrate de importar axios
import '../App.css';

const Login = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
      event.preventDefault();
      
      const userData = {
          name,
          email,
          password,
      };

      try {
        const response = await axios.post('http://localhost:5000/api/users/login', userData);
    
        
        localStorage.setItem('currentUser', JSON.stringify(response.data));
        window.location.href = '/home';
        alert('Inicio de sesión exitoso');
    } catch (error) {
        alert('Error iniciando sesión ', error.response?.data);
    }
    
  };

  return (
      <div className="container mt-5">
          <div className="row justify-content-center">
              <div className="col-md-5">
                  <div className="card custom-card">
                      <div className="card-body">
                          <h1 className="text-center title">Iniciar Sesión</h1>
                          <div className="form-group">
                          <input 
                                  type="text" 
                                  className='form-control input-field' 
                                  placeholder='Nombre' 
                                  value={name} 
                                  onChange={(e) => setName(e.target.value)} 
                              />
                              <input 
                                  type="email" 
                                  className='form-control input-field' 
                                  placeholder='Email' 
                                  value={email} 
                                  onChange={(e) => setEmail(e.target.value)} 
                              />
                              <input 
                                  type="password" 
                                  className='form-control input-field' 
                                  placeholder='Contraseña' 
                                  value={password} 
                                  onChange={(e) => setPassword(e.target.value)} 
                              />
                              <button className='btn btn-primary mt-3 custom-button' onClick={handleSubmit}>Iniciar Sesión</button> {/* Cambié a handleSubmit */}
                          </div>
                          <div className="text-center mt-3">
                              <p>¿No tienes una cuenta? <Link to="/register">Regístrate aquí</Link></p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
};

export default Login;
