import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Axios from 'axios';
import { createContext } from 'react';

// Importing Pages
// RandomVu Pages
import Login from './auth/login/login'
// SuperAdmin Pages
import RegisterSuperAdmin from './auth/registerSuper/registerSuperAdmin';
// Admin Pages
import AdminCreateEvent from './adminButton/adminCreateEvent';
// Student Pages
import Home from  './home/mainPage'
import RegisterStudent from './auth/registerStudent/registerStudent'
import ReviewForm from './reviewForm/reviewForm'
import EditReviews from './editReviewButton/editReviews';
import MainRso from './rso/mainRso';

function App() 
{    
  const [loginStatus, setLoginStatus] = useState('');
  const [userType, setUserType] = useState('');
  // Init userContext
  const UserContext = createContext();

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
            {/*Routes For Student*/}
            <Route path="/mainPage" element={ loginStatus ? <Home loginStatus={ loginStatus }/> : <Login setLoginStatus={ setLoginStatus }/> }/>
            <Route path="/mainPage/ReviewForm" element={ loginStatus ? <ReviewForm loginStatus={ loginStatus }/> : <Login setLoginStatus={ setLoginStatus }/> }/>
            <Route path="/mainPage/editReviews" element={ loginStatus ? <EditReviews loginStatus={ loginStatus }/> : <Login setLoginStatus={ setLoginStatus }/> }/>
            <Route path="/mainPage/mainRso" element={ loginStatus ? <MainRso loginStatus={ loginStatus }/> : <Login setLoginStatus={ setLoginStatus }/> }/>
            {/* Routes For Admin */}
            <Route path="/mainPage/createEvent" element={ loginStatus ? <AdminCreateEvent loginStatus={ loginStatus }/> : <Login setLoginStatus={ setLoginStatus }/> } />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
   );
}

export default App;
