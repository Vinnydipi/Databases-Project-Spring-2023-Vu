import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Axios from 'axios';


// Importing the pages
import Register from './pages/register';
import Login from './pages/login';
import Events from './pages/events';

function App() 
{    

  const [loginStatus, setLoginStatus] = useState('');

  // Used to log the user in and create a cookie to track the current user 
  useEffect(() => 
  {
    Axios.get("http://localhost:3001/login").then((response) => 
    {
      if (response.data.loggedIn === true)
      {
        setLoginStatus(response.data.user[0].username);
        console.log(`User ${ response.data.user[0].username } is logged in.`);
      }
    });
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login setLoginStatus={setLoginStatus} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/events" element={loginStatus ? <Events /> : <Login setLoginStatus={setLoginStatus} />} />
        </Routes>
      </BrowserRouter>
    </>
   );
}

export default App;
