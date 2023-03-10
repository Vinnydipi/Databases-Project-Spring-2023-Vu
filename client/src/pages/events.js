/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Axios from 'axios';

function events()
{

    return(
        <div className='events'>
        {/* Buttons */}
        <button className="button" >Add Event</button>
        {/* <button className="button" >Edit Event </button> */}
        <button className="button" >Delete Event</button>
        <button className="button" >Create RSO</button>
        <button className="button">Create University Account</button>


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