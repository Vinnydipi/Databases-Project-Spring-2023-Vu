/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function Login()
{
    // Info used in the authenticating of Login Attempt
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [loginStatus, setLoginStatus] = useState('');
    
    // COOKIES
    // Something to do with cookies
    Axios.defaults.withCredentials = true;
    useEffect(() => {
      Axios.get('http://localhost:3001/login').then((response) => {
        if (response.data.loggedIn === true)
        {
          setLoginStatus(response.data.user[0].username)
        }
      });
    }, []);

    // Used to Check the Login info and if correct then redirects 
    // to the Event page to show the events 
    const login = () => {
        Axios.post('http://localhost:3001/login', {
        username: username,
        password: password,
        }).then((response) => {
          if (response.data.message)
            setLoginStatus(response.data.message);
          else
          {
            setLoginStatus(response.data[0].username);
            
          }
        });
    };
    
    // HTML FOR THE FILE
    return (
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
    );
}

export default Login;