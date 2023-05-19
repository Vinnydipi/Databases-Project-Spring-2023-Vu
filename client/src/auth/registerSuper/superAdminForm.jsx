import React from 'react';

function SuperAdminForm({ setUsernameReg, setPasswordReg, setEmailReg, RegisterSuperAdminFunc })
{    
    return (
        <div className='container'>
          <div className='form'>
            <h1>Superadmin Registration</h1>
            <div className='formGroup'>
              <label>Username:</label>
              <input type="text" onChange={(e) => {setUsernameReg(e.target.value)}}/>           
              <label>Email:</label>
              <input type="text" onChange={(e) => {setEmailReg(e.target.value)}}/>                   
              <label>Password:</label>
              <input type="password" onChange={(e) => {setPasswordReg(e.target.value)}}/>
            </div>
            <div className='buttons'>
              <button onClick={RegisterSuperAdminFunc}>Register</button>
            </div>
          </div>
      </div>
    );
};

export default SuperAdminForm;