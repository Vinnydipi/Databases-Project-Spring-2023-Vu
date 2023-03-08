import React, { useState } from 'react';
import Axios from 'axios';
import './App.css';

function App() {
  // Info Used for the Registering of a new user
  const [usernameReg, setUsernameReg] = useState('');
  const [passwordReg, setPasswordReg ] = useState('');
  const [emailReg, setEmailReg ] = useState('');
  const [userType, setUserType] = useState('');

  // Info used in the authenticating of Login Attempt
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

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

  // Used to Check the Login info and if correct then redirects 
  // to the Event page to show the events 
  const login = () => {
    Axios.post('http://localhost:3001/login', {
      username: username,
      password: password,
    }).then((response) => {
      console.log(response);
    });
  };

  return (
    <div className='App'>
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



        <div className='login'>
          <h2>LOGIN</h2>
          <div>
            <label>Username:</label>
            <input type="text"
            onChange={(e) => {
              setUsername(e.target.value);
              }}></input>
          </div>
          <div>
            <label>Password:</label>
            <input type="text"
            onChange={(e) => {
              setPassword(e.target.value);
              }}></input>
          </div>
          <button onClick={login}>Login</button>
        </div>
    </div>
  );
}

export default App;
