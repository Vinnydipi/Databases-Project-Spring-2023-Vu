import React from 'react';

function RegistrationForm({ setUsernameReg, setPasswordReg, setEmailReg, studentRegister })
{
    return (
        <div className=' container'>
            <div className='form'>
                <h1>Student Registration</h1>
                <div className='formGroup'>
                    <label>Username:</label>
                        <input type="text" onChange={(e) => {setUsernameReg(e.target.value)}}/>
                    <label>Email:</label>
                        <input type="text" onChange={(e) => {setEmailReg(e.target.value)}}/>
                    <label>Password:</label>
                        <input type="text" onChange={(e) => {setPasswordReg(e.target.value)}}/>
                </div>
                <div className='buttons'>
                    <button onClick={ studentRegister }>Register</button>
                </div>
            </div>
        </div>
    )
}

export default RegistrationForm;