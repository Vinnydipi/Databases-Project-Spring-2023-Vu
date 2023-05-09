import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Import CSS
import '../authPageStyle.css';
// Import function
import { RegisterSuperAdminFunc } from './superAdminFunc';
import SuperAdminForm from './superAdminForm';
// Import navBar
import NavButtons from '../authNavBar';

function RegisterSuperAdmin() 
{
	// Used to navigate to the login page
	const navigate = useNavigate();

	// Info Used for the Registering of a new user
	const [usernameReg, setUsernameReg] = useState('');
	const [passwordReg, setPasswordReg ] = useState('');
	const [emailReg, setEmailReg ] = useState('');

	// Used to register a new superadmin account
	const handleSuperAdminRegister = () => 
	{
		RegisterSuperAdminFunc(usernameReg, passwordReg, emailReg)
			.then(() => 
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
		<div>
			<NavButtons/>

			<SuperAdminForm
				navigate={navigate}
				setUsernameReg={setUsernameReg}
				setPasswordReg={setPasswordReg}
				setEmailReg={setEmailReg}
				RegisterSuperAdminFunc={handleSuperAdminRegister}/>
		</div>
	);
}

export default RegisterSuperAdmin;