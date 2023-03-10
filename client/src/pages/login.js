/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function Login()
{
    // Info used in the authenticating of Login Attempt
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // Checking if the account is logged in
    const [loginStatus, setLoginStatus] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // COOKIES
    // Something to do with cookies
    Axios.defaults.withCredentials = true;

    useEffect(() => {
      Axios.get('http://localhost:3001/login').then((response) => {
        if (response.data.loggedIn === true)
        {
          setLoginStatus(response.data.user[0].username)
          console.log(`User ${response.data.user[0].username} is logged in.`);
          setIsLoggedIn(true);
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
          {
            setLoginStatus(response.data.message);
          }
          else
          {
            setLoginStatus(response.data[0].username);
            setIsLoggedIn(true);
            refresh();
          }
        });
    };

    // Refreshing the page
    const refresh = () => window.location.reload(true);
    
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
          {isLoggedIn && <p>You are Logged in!</p>}
        </div>
    );
}

export default Login;