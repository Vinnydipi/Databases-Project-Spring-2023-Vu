import React from 'react';

function RegistrationForm({ navigate, setUsernameReg, setPasswordReg, setEmailReg, studentRegister })
{
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
    )
}

export default RegistrationForm;