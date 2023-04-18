import React, { useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

// Import CSS
import '../style/preLoginStyle.css';

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
		<div className='container'>
		  <div className='navButtons'>
			<button onClick={() => navigate('/')}>To Login Page</button>
			<button onClick={() => navigate('/registerStudent')}>Student Account Registration</button>
		  </div>
		  <div className='form'>
			<h1>Superadmin Registration</h1>
			<div className='formGroup'>
			  <label>Username:</label>
			  <input 
				type="text"
				onChange={(e) => {
				  setUsernameReg(e.target.value);
				}}>
			  </input>
			</div>
			<div className='formGroup'>
			  <label>Email:</label>
			  <input 
				type="text"
				onChange={(e) => {
				  setEmailReg(e.target.value);
				}}>
			  </input>
			</div>
			<div className='formGroup'>
			  <label>Password:</label>
			  <input 
				type="password"
				onChange={(e) => {
				  setPasswordReg(e.target.value);
				}}>
			  </input>
			</div>
			<div className='buttons'>
			  <button onClick={superAdminRegister}>Register as SuperAdmin</button>
			</div>
		  </div>
		</div>
	);
}

export default RegisterSuperAdmin;