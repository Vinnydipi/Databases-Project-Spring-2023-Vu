import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import './App.css';

// Importing the pages
import Register from './pages/register';
import Login from './pages/login';
import Events from './pages/events';
// import Rso from './pages/RSO';

function App() 
{    

  const [loginStatus, setLoginStatus] = useState('');

  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response) => {
      if (response.data.loggedIn === true)
      {
        setLoginStatus(response.data.user[0].username);
        console.log(`User ${response.data.user[0].username} is logged in.`);
      }
    });
  }, []);

  return (
    <div className='App'>
      {/*Only render Regist/Login if user is not authenticated!*/}
      {!loginStatus && (
        <>
            <Register setLoginStatus={setLoginStatus}/>
            <Login setLoginStatus={setLoginStatus}/>
        </>
      )}
      {/*Render Events if user is authenticated*/}
      {loginStatus && <Events loginStatus={loginStatus}/>}
    </div>
   );
}

export default App;
