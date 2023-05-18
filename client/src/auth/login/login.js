/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

// Import CSS
import '../authPageStyle.css';
// Import Function
import { handleLogin } from './loginFunc';
// Import JSX
import LoginForm from './loginForm';
import NavButtons from '../authNavBar';

function Login()
{
    // To navigate to the register page
    const navigate = useNavigate();
    
    // Info used in the authenticating of Login Attempt
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // Checking if the account is logged in
    const [loginStatus, setLoginStatus] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // COOKIES
    // Something to do with cookies
    Axios.defaults.withCredentials = true;

    useEffect(() => 
    {
      Axios.get('http://localhost:3001/login').then((response) => 
      {
        if (response.data.loggedIn === true)
        {
          setLoginStatus(response.data.user[0].username)
          console.log(`User ${response.data.user[0].username} is logged in as ${response.data.user[0].userType}.`);
          setIsLoggedIn(true);
        }
      });
    }, []);

    const handleLoginClick = () =>
    {
      handleLogin(username, password, setIsLoggedIn, setIsLoggedIn, navigate);
    }

    // HTML FOR THE FILE
    return (
      <div>
        <NavButtons/>

        <LoginForm
          setUsername={setUsername}
          setPassword={setPassword}
          handleLogin={handleLoginClick}
          isLoggedIn={isLoggedIn}/>
      </div>
    );
}

export default Login;