/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import { UserContext } from '../../../utils/UserContext';

// Importing the logout feature
import { logout } from '../../../components/logout';

function StudentHome()
{

    // Used to navigate around the web app
    const navigate = useNavigate();

    // Getting userType
    const userType = useContext(UserContext);

    return(

        <div className='superAdminEvents'>
        STUDENT HOME PAGE
        {/* Logs the user out*/}
        <button className="button" onClick={ logout }>Logout</button>
        </div>
    );
}

export default StudentHome;