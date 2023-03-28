import React, { useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

function RegisterSuperAdmin() 
{
    // Used to navigate to the login page
    const navigate = useNavigate();

    // Info Used for the Registering of a new user
    const [usernameReg, setUsernameReg] = useState('');
    const [passwordReg, setPasswordReg ] = useState('');
    const [emailReg, setEmailReg ] = useState('');

    // Used to register a new superadmin account
    const superAdminRegister = () => 
    {
      Axios.post('http://localhost:3001/registerSuperAdmin', 
      {
        username: usernameReg,
        password: passwordReg,
        email: emailReg,
        userType: 'superadmin',
      }).then(() => 
      {
        alert('Successful insert');
      }).catch((error) => 
      {
        if (error.response && error.response.status === 400) 
        {
          alert('Bad request: ' + error.response.data);
        } else 
        {
          alert(error.message);
        }
      });
    };

    // HTML FOR THE FILE 
    return (
          <div className='registration'>
          <h1>Superadmin Registration</h1>
            <div>
              <label>Username:</label>
              <input type="text"
              onChange={(e) => {
                setUsernameReg(e.target.value);
                }}></input>
            </div>
            <div>
              <label>Email:</label>
              <input 
              type="text"
              onChange={(e) => {
                setEmailReg(e.target.value);
                }}></input>
            </div>
            <div>
              <label>Password:</label>
              <input 
              type="text"
              onChange={(e) => {
                setPasswordReg(e.target.value);
                }}></input>
            </div>
            <div>
              <button onClick={ superAdminRegister }>Register as SuperAdmin</button>
            </div>
            <button onClick={()=>navigate('/')}>To Login Page</button>
            <button onClick={()=>navigate('/registerStudent')}>Student Account Registration</button>
          </div>
    );
}

export default RegisterSuperAdmin;