import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import Axios from 'axios';

// Import API
import { handleCreateEvent } from './API/handleCreateEvent';

// Importing Style
import './createEventStyle.css';

function AdminCreateEvent({ showForm, setShowForm })
{
    // Holds RSO lists that the admin can make an event for
    const [rsoList, setRsoList] = useState([]);
    // The current logged in User
    const userId = sessionStorage.getItem('id'); 

    const setData = (event) =>
    {
        event.preventDefault();
        const formData = new FormData(event.target);

        // Finds hostRso id number
        const selectedRso = rsoList.find((rso) => rso.name  === formData.get('hostRso'));

        const eventData = 
        {
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
            rsoID: selectedRso ? selectedRso.rsoId : 2, // adds the rsoID
        };
        
        handleCreateEvent(eventData)// Call the API function
    };

    useEffect(() =>
    {
        // Make a call to the backend to get the data
        Axios.get(`http://localhost:3001/mainPage/getRso?userId=${userId}`)
        .then(response =>
            {
                setRsoList(response.data);
            })
            .catch(error =>
            {
                console.log(error);
            });
    }, [userId, showForm]);

    return(
        <div className='createFormWrapper'>
            {showForm && (
                <form className='createForm' onSubmit={ setData }>
                    <br></br>
                        <h1 className='title'>New Event</h1>
                    <label>Event Name:
                        <input placeholder='Event Name' type='text' name='name' required/>
                    </label>
                    <br></br>
                    <label>Category:
                        <input placeholder='Category Type' type='text' name='category' required/>
                    </label>
                    <br></br>
                    <label>Description:
                        <textarea placeholder='200 Characters Max' name='description' required/>
                    <br></br>
                    </label>
                    <br></br>
                    <label>Date/Time:
                        <input type='datetime-local' name='time' required/>
                    </label>
                    <br></br>
                    <label>Contact Number:
                        <input placeholder='(xxx)-xxx-xxxx' type='tel' name='phone' required/>
                    </label>
                    <br></br>
                    <label>Contact Email:
                        <input placeholder='Creators Email' type='email' name='email' required/>
                    </label>
                    <br></br>
                    <label>Private Or Public</label>
                        <select name='isPrivate' required>
                            <option value=''>Select Type</option>
                            <option value='0'>Private</option>
                            <option value='1'>Public</option>
                        </select>
                    <br></br>
                    <label>Host RSO:
                        <select name='hostRso' required>
                            <option value=''>Select RSO</option>
                            <option value='NONE'>NONE</option>
                            {rsoList.map((rso) => (
                                <option key={rso.rsoId} value={rso.name}>
                                    {rso.name}
                                </option>
                            ))}
                        </select>
                    </label>
                    <br></br>
                    <label>Longitude:
                        <input placeholder='NORTH(+)' type='number' step='any' name='long' required/>
                    </label>
                    <br></br>
                    <label>Latitude:
                        <input placeholder='WEST(-)' type='number' step='any' name='lat' required/>
                    </label>
                    <br></br>
                    <div className='submit-cancel-wrapper'>
                        <button className='sub-cancel' type='submit'>Submit</button> 
                        <button className='sub-cancel' onClick={() => setShowForm(false)}>Cancel</button>
                    </div>
                </form>
            )}
        </div>
    )
}

export default AdminCreateEvent;