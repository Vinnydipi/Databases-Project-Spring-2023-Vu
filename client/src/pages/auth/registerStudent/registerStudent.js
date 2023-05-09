import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RegistrationForm from './studentForm';

// Import CSS
import '../authPageStyle.css';
// Import function
import { studentRegister } from './studentFunc';
// Import NavBar
import NavButtons from '../authNavBar';

function RegisterStudent() 
{
    // Used to navigate to the login page
    const navigate = useNavigate();

    // Info Used for the Registering of a new user
    const [usernameReg, setUsernameReg] = useState('');
    const [passwordReg, setPasswordReg ] = useState('');
    const [emailReg, setEmailReg ] = useState('');

    // Used to register a new student account
    const handleStudentRegister = () => 
    {
        studentRegister(usernameReg, passwordReg, emailReg)
            .then(() => {
                alert('Successful insert');
                navigate('/');
            })
            .catch((error) =>
            {
            alert(error.message);
            });
    };

    // JSX  
    return (
        <div>
            <NavButtons/>
            
            <RegistrationForm
                navigate={navigate}
                setUsernameReg={setUsernameReg}
                setPasswordReg={setPasswordReg}
                setEmailReg={setEmailReg}
                studentRegister={handleStudentRegister}
            />
        </div>
    );
}

export default RegisterStudent;