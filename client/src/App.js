import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Axios from 'axios';
import { UserContext } from './pages/utils/UserContext';

// Importing Pages
// RandomVu Pages
import Login from './pages/login/login';
// SuperAdmin Pages
import RegisterSuperAdmin from './pages/register/registerSuperAdmin';
import CreateEvent from './pages/accountType/superAdminPages/components/createEvent';
import SuperAdminHome from './pages/accountType/superAdminPages/home/superAdminHome';
// Admin Pages

// Student Pages
import StudentHome from './pages/accountType/studentPages/home/studentHome';
import RegisterStudent from './pages/register/registerStudent';
import ReviewForm from './pages/accountType/studentPages/components/reviewForm';

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
      <UserContext.Provider value={ userType }>
        <BrowserRouter>
          <Routes>
            {/*Misc. Routes*/}
            <Route path="/" element={<Login setLoginStatus={ setLoginStatus }/>}/>
            <Route path="/registerStudent" element={<RegisterStudent/>}/>
            <Route path="/registerSuperAdmin" element={<RegisterSuperAdmin/>}/>
            {/*Routes For Super Admin*/}
            <Route path="/superAdminHome" element={ loginStatus ? <SuperAdminHome/> : <Login setLoginStatus={ setLoginStatus }/> }/>
            <Route path="/createEvent" element={ loginStatus ? <CreateEvent/> : <Login setLoginStatus={ setLoginStatus }/> }/>
            {/*Routes For Student*/}
            <Route path="/studentHome" element={ loginStatus ? <StudentHome loginStatus={ loginStatus }/> : <Login setLoginStatus={ setLoginStatus }/> }/>
            <Route path="/studentHome/ReviewForm" element={ loginStatus ? <ReviewForm loginStatus={ loginStatus }/> : <Login setLoginStatus={ setLoginStatus }/> }/>
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
   );
}

export default App;
