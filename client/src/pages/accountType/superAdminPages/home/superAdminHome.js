/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import { UserContext } from '../../../utils/UserContext';

// Importing the logout feature
import { logout } from '../../../components/logout';

function SuperAdminHome() {
    // Used to navigate around the web app
    const navigate = useNavigate();
  
    // Getting userType
    const userType = useContext(UserContext);
  
    // State for the university profile form
    const [universityName, setUniversityName] = useState('');
    const [universityLocation, setUniversityLocation] = useState('');
    const [universityDescription, setUniversityDescription] = useState('');
    const [universityNumStudents, setUniversityNumStudents] = useState('');
  
    // State for the event creation form
    const [eventName, setEventName] = useState('');
    const [eventCategory, setEventCategory] = useState('');
    const [eventDescription, setEventDescription] = useState('');
    const [eventTime, setEventTime] = useState('');
    const [eventMap, setEventMap] = useState('');
    const [eventPhone, setEventPhone] = useState('');
    const [eventEmail, setEventEmail] = useState('');
    const [eventIsPrivate, setEventIsPrivate] = useState(false);
    const [eventHost, setEventHost] = useState('');
  
    // Function to handle the submission of the university profile form
    const handleUniversitySubmit = (event) => {
      event.preventDefault();
      Axios.post('/api/university', {       
        name: universityName,
        location: universityLocation,
        description: universityDescription,
        numStudents: universityNumStudents })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
  
    // Function to handle the submission of the event creation form
    const handleEventSubmit = (event) => {
      event.preventDefault();
      Axios.post('/api/event', {
        name: eventName,
        category: eventCategory,
        description: eventDescription,
        time: eventTime,
        map: eventMap,
        phone: eventPhone,
        email: eventEmail,
        isPrivate: eventIsPrivate,
        host: eventHost,
      })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
  
    return (
      <div className="superAdminHome">
        <h1>SUPER ADMIN HOME PAGE</h1>
  
        {/* Logs the user out*/}
        <button className="button" onClick={logout}>
          Logout
        </button>
  
        {/* University Profile Form */}
        <h2>Create a University Profile</h2>
        <form onSubmit={handleUniversitySubmit}>
          <div>
            <label htmlFor="universityName">University Name:</label>
            <input
              type="text"
              id="universityName"
              value={universityName}
              onChange={(event) => setUniversityName(event.target.value)}
            />
          </div>
          <div>
            <label htmlFor="universityLocation">University Location:</label>
            <input
              type="text"
              id="universityLocation"
              value={universityLocation}
              onChange={(event) => setUniversityLocation(event.target.value)}
            />
          </div>
          <div>
          <label htmlFor="universityDescription">University Description:</label>
          <textarea
            id="universityDescription"
            value={universityDescription}
            onChange={(event) => setUniversityDescription(event.target.value)}
            />
            </div>
            <div>
            <label htmlFor="universityNumStudents">Number of Students:</label>
            <input
            type="number"
            id="universityNumStudents"
            value={universityNumStudents}
            onChange={(event) => setUniversityNumStudents(event.target.value)}
            />
            </div>
            <button type="submit">Create University Profile</button>
            </form>
  
        {/* Event Creation Form */}
        <h2>Create an Event</h2>
        <form onSubmit={handleEventSubmit}>
          <div>
            <label htmlFor="eventName">Event Name:</label>
            <input
              type="text"
              id="eventName"
              value={eventName}
              onChange={(event) => setEventName(event.target.value)}
/>
</div>
<div>
<label htmlFor="eventCategory">Event Category:</label>
<input
type="text"
id="eventCategory"
value={eventCategory}
onChange={(event) => setEventCategory(event.target.value)}
/>
</div>
<div>
<label htmlFor="eventDescription">Event Description:</label>
<textarea
id="eventDescription"
value={eventDescription}
onChange={(event) => setEventDescription(event.target.value)}
/>
</div>
<div>
<label htmlFor="eventTime">Event Time:</label>
<input
type="datetime-local"
id="eventTime"
value={eventTime}
onChange={(event) => setEventTime(event.target.value)}
/>
</div>
<div>
<label htmlFor="eventMap">Event Map:</label>
<input
type="text"
id="eventMap"
value={eventMap}
onChange={(event) => setEventMap(event.target.value)}
/>
</div>
<div>
<label htmlFor="eventPhone">Event Phone:</label>
<input
type="tel"
id="eventPhone"
value={eventPhone}
onChange={(event) => setEventPhone(event.target.value)}
/>
</div>
<div>
<label htmlFor="eventEmail">Event Email:</label>
<input
type="email"
id="eventEmail"
value={eventEmail}
onChange={(event) => setEventEmail(event.target.value)}
/>
</div>
<div>
<label htmlFor="eventIsPrivate">Is Private Event:</label>
<input
type="checkbox"
id="eventIsPrivate"
checked={eventIsPrivate}
onChange={(event) => setEventIsPrivate(event.target.checked)}
/>
</div>
<div>
<label htmlFor="eventHost">Event Host:</label>
<input
type="text"
id="eventHost"
value={eventHost}
onChange={(event) => setEventHost(event.target.value)}
/>
</div>
<button type="submit">Create Event</button>
</form>
</div>
);
}

export default SuperAdminHome;