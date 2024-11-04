import React, { useState } from 'react';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setCPassword] = useState('');

    function register() {
        if (password === cpassword) {
            const user = {
                name,
                email, 
                password,
            };
            console.log(user);
            // You can add your API call here to send the user data
        } else {
            alert('Las contraseñas no son iguales');
        }
    }

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-5">
                    <h1 className="text-center">Registro</h1>
                    <div className="form-group">
                        <input 
                            type="text" 
                            className='form-control' 
                            placeholder='Nombre' 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                        />
                        <input 
                            type="email" 
                            className='form-control' 
                            placeholder='Email' 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                        />
                        <input 
                            type="password" 
                            className='form-control' 
                            placeholder='Contraseña' 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                        />
                        <input 
                            type="password" 
                            className='form-control' 
                            placeholder='Confirmar Contraseña' 
                            value={cpassword} 
                            onChange={(e) => setCPassword(e.target.value)} 
                        />
                        <button className='btn btn-primary mt-3' onClick={register}>Registrate</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
