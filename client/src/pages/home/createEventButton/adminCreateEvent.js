import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import Axios from 'axios';

// Import components
import CreateEvent from './components/createEvent';

function AdminCreateEvent()
{
    // Holds RSO lists that the admin can make an event for
    const [rsoList, setRsoList] = useState([]);
    // The current logged in User
    const userId = sessionStorage.getItem('id'); 
    // The information for the event that the admin is making
    const [eventInfo, setEventInfo] = useState({
        name: '',
        category: '',
        description: '',
        time: null,
        phone: null,
        email: null,
        isPrivate: null,
        hostRso: '',
        long: null,
        lat: null,
      });

    const handleSubmit = (event) =>
    {
        event.preventDefault();
        const formData = new FormData(event.target);

        const eventData = {
            name: formData.get('name'),
            category: formData.get('category'),
            description: formData.get('description'),
            time: formData.get('time'),
            phone: formData.get('phone'),
            email: formData.get('email'),
            isPrivate: formData.get('isPrivate'),
            hostRso: formData.get('hostRso'),
            long: formData.get('long'),
            lat: formData.get('lat'),
          };
       
        setEventInfo(eventData); // Updates the useState obj with the form info
    };

    useEffect(() =>
    {
        console.log(eventInfo);
        // Make a call to the backend to get the data
        Axios.get(`http://localhost:3001/mainPage/createEvent/getRso?userId=${userId}`)
        .then(response =>
            {
                setRsoList(response.data);
            })
            .catch(error =>
            {
                console.log(error);
            });
    }, [userId, eventInfo]);

    return(
        <div className='mainContainer'>
            <h1>Creating New Event</h1>
            <CreateEvent rsoList={ rsoList } 
                         handleSubmit={ handleSubmit }/>
        </div>
    )
}

export default AdminCreateEvent;