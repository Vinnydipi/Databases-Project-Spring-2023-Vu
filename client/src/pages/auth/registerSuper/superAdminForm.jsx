import React from 'react';

function SuperAdminForm({ navigate, setUsernameReg, setPasswordReg, setEmailReg, superAdminRegister })
{
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
};

export default SuperAdminForm;