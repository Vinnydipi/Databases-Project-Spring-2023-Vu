/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Axios from 'axios';

function events()
{

    return(
        <div className='events'>
        {/* Buttons */}
        {/* <button className="button" onClick={addEvent}>Add Event</button>
        <button className="button" onClick={editEvent}>Edit Event</button>
        <button className="button" onClick={deleteEvent}>Delete Event</button> */}

        {/* Event Table */}
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Category</th>
                <th>Description</th>
                <th>Time</th>
                <th>Location</th>
                <th>Latitude</th>
                <th>Longitude</th>
                <th>Contact Number</th>
                <th>Contact Email</th>
                <th>Private/Public</th>
                <th>RSO Hosting</th>
            </tr>
            </thead>
            <tbody>
            {/* {events.map((event) => (
                <tr key={event.name}>
                <td>{event.name}</td>
                <td>{event.category}</td>
                <td>{event.description}</td>
                <td>{event.time}</td>
                <td>{event.location}</td>
                <td>{event.latitude}</td>
                <td>{event.longitude}</td>
                <td>{event.contactNumber}</td>
                <td>{event.contactEmail}</td>
                <td>{event.isPrivate ? 'Private' : 'Public'}</td>
                <td>{event.rsoHosting}</td>
                </tr>
            ))} */}
            </tbody>
        </table>
        </div>
    );
}

export default events;