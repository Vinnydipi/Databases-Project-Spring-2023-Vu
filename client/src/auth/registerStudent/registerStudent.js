import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RegistrationForm from './studentForm';

// Import CSS
import '../authPageStyle.css';
// Import function
import { studentRegister } from './studentFunc';
// Import NavBar
import TaskBar from '../authTaskBar';

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
        studentRegister(usernameReg, passwordReg, emailReg, navigate)
    }

    // JSX  
    return (
        <div>
            <TaskBar/>
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