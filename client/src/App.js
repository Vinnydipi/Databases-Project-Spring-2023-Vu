import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Axios from 'axios';
import { UserContext } from './pages/utils/UserContext';

// Importing Pages
// RandomVu Pages
import Login from './pages/auth/login/login';
// SuperAdmin Pages
import RegisterSuperAdmin from './pages/auth/registerSuper/registerSuperAdmin';
// Admin Pages
import AdminCreateEvent from './pages/home/adminButton/adminCreateEvent';
// Student Pages
import MainPage from './pages/home/mainPage';
import RegisterStudent from './pages/auth/registerStudent/registerStudent';
import ReviewForm from './pages/home//reviewForm/reviewForm';
import EditReviews from './pages/home/editReviewButton/editReviews';
import MainRso from './pages/home/rso/mainRso';

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
            {/*Routes For Student*/}
            <Route path="/mainPage" element={ loginStatus ? <MainPage loginStatus={ loginStatus }/> : <Login setLoginStatus={ setLoginStatus }/> }/>
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
