/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

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

    // Navigate to the different userType Pages
    const userTypeToPage = {
      student: '/studentHome',
      superadmin: '/superAdminHome',
      admin: '/adminHome'
    };

    // Used to Check the Login info and if correct then redirects 
    // to the Event page to show the events 
    const login = () => 
    {
      Axios.post('http://localhost:3001/login', {
        username: username,
        password: password,
        }).then((response) => 
        {
          if (response.data.message)
          {
            setLoginStatus(response.data.message);
          }
          else
          {
            const user = response.data;
            setLoginStatus(user.username);
            setIsLoggedIn(true);

            // Store the current user's username in session storage
            // to access in other files
            sessionStorage.setItem('curUser', user.username);
            sessionStorage.setItem('userEmail', user.email);
            sessionStorage.setItem('id', user.idNum);

            // Now check the userType and redirect accordingly
            const userType = user.userType;
            const nextPage = userTypeToPage[userType];
            navigate(nextPage);
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
            onChange={(e) => 
            {
              setUsername(e.target.value);
            }}></input>
          </div>
          <div>
            <label>Password:</label>
            <input type="text"
            onChange={(e) => 
            {
              setPassword(e.target.value);
            }}></input>
          </div>
          <div>
            <button onClick={()=>navigate('/registerStudent')}>Register Student Account</button>
            <button onClick={()=>navigate('/registerSuperAdmin')}>Register Superadmin Account</button>
          </div>
          <button onClick={ login }>Login</button>
          { isLoggedIn && 'User Logged in Rerouting'}
        </div>
    );
}

export default Login;