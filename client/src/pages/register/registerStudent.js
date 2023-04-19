import React, { useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

// Import CSS
import '../style/preLoginStyle.css';

function RegisterStudent() 
{
    // Used to navigate to the login page
    const navigate = useNavigate();

    // Info Used for the Registering of a new user
    const [usernameReg, setUsernameReg] = useState('');
    const [passwordReg, setPasswordReg ] = useState('');
    const [emailReg, setEmailReg ] = useState('');

    // Used to register a new student account
    const studentRegister = () => 
    {
        Axios.post('http://localhost:3001/registerStudent', {
        username: usernameReg,
        password: passwordReg,
        email: emailReg,
        userType: 'student',
        }).then(() => {
          alert('Successful insert');
        })
        .catch((error) =>
        {
          alert(error.message);
        });
    };

    // HTML FOR THE FILE 
    return (
        <div className=' container'>
            <div className='navButtons'>
                <button onClick={()=>navigate('/')}>To Login Page</button>
                <button onClick={()=>navigate('/registerSuperAdmin')}>Superadmin Account Registration</button>
            </div>
            <div className='form'>
                <h1>Student Registration</h1>
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
                            type="text"
                                onChange={(e) => {
                                setPasswordReg(e.target.value);
                            }}>
                        </input>
                </div>
                <div className='buttons'>
                    <button onClick={ studentRegister }>Register as Student</button>
                </div>
            </div>
        </div>
    );
}

export default RegisterStudent;