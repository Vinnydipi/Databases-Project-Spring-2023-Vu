import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Axios from 'axios';
import { UserContext } from './pages/utils/UserContext';

// Importing the pages
import RegisterStudent from './pages/register/registerStudent';
import RegisterSuperAdmin from './pages/register/registerSuperAdmin';
import Login from './pages/login/login';
import Events from './pages/events/events';
import CreateRso from './pages/rso/createRso';
import CreateEvent from './pages/adminAccounts/superAdmin/createEvent/createEvent';

function App() 
{    

  const [loginStatus, setLoginStatus] = useState('');
  const [userType, setUserType] = useState('');

  // Used to log the user in and create a cookie to track the current user 
  useEffect(() => 
  {
    Axios.get("http://localhost:3001/login").then((response) => 
    {
      if (response.data.loggedIn === true)
      {
        setLoginStatus(response.data.user[0].username);
        setUserType(response.data.user[0].userType);
        console.log(`User ${ response.data.user[0].username } is logged in.`);
      }
    });
  }, []);

  return (
    <>
      <UserContext.Provider value={ userType  }>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login setLoginStatus={ setLoginStatus } />} />
            <Route path="/registerStudent" element={<RegisterStudent />} />
            <Route path="/registerSuperAdmin" element={<RegisterSuperAdmin />} />
            <Route path="/events" element={ loginStatus ? <Events /> : <Login setLoginStatus={ setLoginStatus } />} />
            <Route path="/createRso" element={ loginStatus ? <CreateRso /> : <Login setLoginStatus={ setLoginStatus } /> } />
            <Route path="/createEvent" element={ loginStatus ? <CreateEvent /> : <Login setLoginStatus={ setLoginStatus } /> } />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
   );
}

export default App;
