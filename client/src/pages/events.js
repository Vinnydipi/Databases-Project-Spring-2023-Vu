/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Axios from 'axios';

// Importing the logout feature
import { logout } from './utils/logout';

function events()
{

    return(
        <div className='events'>
        {/* Buttons */}
        <button className="button" >Add Event</button>
        <button className="button" >Delete Event</button>
        <button className="button" >Create RSO</button>
        <button className="button">Create University Account</button>
        {/* Logs the user out*/}
        <button className="button" onClick={ logout }>Logout</button>
        
        {/* Event Table */}
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Category</th>
                <th>Description</th>
                <th>Time</th>
                <th>View Map Link</th>
                <th>Contact Number</th>
                <th>Contact Email</th>
                <th>Private/Public</th>
                <th>RSO Hosting</th>
            </tr>
            </thead>
        </table>
        </div>
    );
}

export default events;