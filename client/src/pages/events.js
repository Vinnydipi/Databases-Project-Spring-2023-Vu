/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';

// Importing the logout feature
import { logout } from './utils/logout';

function Events()
{

    // Used to navigate around the web app
    const navigate = useNavigate();

    return(

        <div className='events'>
        {/* Buttons */}
        <button className="button" onClick={()=>navigate('/createEvent')}>Create Event</button>
        <button className="button" onClick={()=>navigate('/createRso')}>Create RSO</button>
        <button className="button" onClick={()=>navigate('/viewRso')}>View RSO's</button>
        <button className="button" onClick={()=>navigate('/createUni')}>Create University</button>
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