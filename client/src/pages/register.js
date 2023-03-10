import React, { useState } from 'react';
import Axios from 'axios';

function Register() 
{
    // Info Used for the Registering of a new user
    const [usernameReg, setUsernameReg] = useState('');
    const [passwordReg, setPasswordReg ] = useState('');
    const [emailReg, setEmailReg ] = useState('');
    const [userType, setUserType] = useState('');

    // Used to register a new User
    const register = () => {
        Axios.post('http://localhost:3001/register', {
        username: usernameReg,
        password: passwordReg,
        email: emailReg,
        userType: userType,
        }).then(() => {
        alert('Successful insert');
        });
    };

    // HTML FOR THE FILE 
    return (
          <div className='registration'>
          <h1>REGISTER</h1>
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
              <label>User Type:</label>
              <select name="userType" onChange={(e) =>{
                setUserType(e.target.value);
                }}>
                <option value="">Select a User Type</option>
                <option value="superAdmin">Super Admin</option>
                <option value="admin">Admin</option>
                <option value="student">Student</option>
              </select>
            </div>
            <button onClick={register}>Register</button>
          </div>
    );
}

export default Register;