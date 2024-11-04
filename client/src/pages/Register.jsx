import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
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
            const response = await axios.post('http://localhost:5000/api/users/register', userData);
           
            alert('Registro exitoso', response.data);
        } catch (error) {
            alert('Error registrando:', error.response.data);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
             <input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                placeholder="Name"
                required 
            />
            <input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="Email"
                required 
            />
            <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                placeholder="Password"
                required 
            />
            <button type="submit">Registrarse</button>
        </form>
    );
};

export default Register;

