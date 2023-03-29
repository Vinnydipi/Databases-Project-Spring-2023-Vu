/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import { UserContext } from '../utils/UserContext';

// Importing the logout feature
import { logout } from '../components/logout';

function Events()
{

    // Used to navigate around the web app
    const navigate = useNavigate();

    // Getting userType
    const userType = useContext(UserContext);

    return(

        <div className='events'>
        {/* Buttons */}
        <button className="button" onClick={()=>navigate('/createEvent')}>Create Event</button>
        <button className="button" onClick={()=>navigate('/createRso')}>Create RSO</button>
        {userType === 'superadmin' &&  <button className="button" onClick={()=>navigate('/createUni')}>Create University</button>}
        {/* Logs the user out*/}
        <button className="button" onClick={ logout }>Logout</button>
        
        {/* Event Table */}
        <table>
            <thead>
            <tr>
                <th>Name...</th>
                <th>Category...</th>
                <th>Description...</th>
                <th>Time...</th>
                <th>Map...</th>
                <th>Phone #...</th>
                <th>Email...</th>
                <th>Private/Public...</th>
                <th>Host...</th>
            </tr>
            </thead>
        </table>
        </div>
    );
}

export default Events;