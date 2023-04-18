/* eslint-disable no-unused-vars */
import React from 'react';

// Import API's
import { handleCreatePublicEvent } from '../API/superAdmin/handleCreatePublicEvent';

function CreatePublicEvent({ setShowCreatePublic, showCreatePublic })
{
    
    // The Public Event information to be submitted to the backend
    const setData = (event) =>
    {
        event.preventDefault();
        const formData = new FormData(event.target);

        // Sets the info to eventData so we can
        const eventData = 
        {
            name: formData.get('name'),
            category: formData.get('category'),
            description: formData.get('description'),
            time: formData.get('time'),
            phone: formData.get('phone'),
            email: formData.get('email'),
            long: formData.get('long'),
            lat: formData.get('lat'),
        };

        // Calls the API with the given info above
        handleCreatePublicEvent(eventData);
        setShowCreatePublic(false);
    };

    return(
        <div>Creating Public Event
            {showCreatePublic && (
                <form className='publicEvent' onSubmit={ setData }>
                    <button onClick={() => setShowCreatePublic(false)}>X</button>
                    <br></br>
                    <label>Event Name:</label><br></br>
                        <input type='text' name='name'/>
                    <br></br>
                    <label>Category:</label><br></br>
                        <input type='text' name='category'/>
                    <br></br>
                    <label>Description:</label><br></br>
                        <textarea name='description'/>
                    <br></br>
                    <label>Date/Time:</label><br></br>
                        <input type='datetime-local' name='time'/>
                    <br></br>
                    <label>Contact Number:</label><br></br>
                        <input type='tel' name='phone'/>
                    <br></br>
                    <label>Contact Email:</label><br></br>
                        <input type='email' name='email'/>
                    <br></br>
                    <label>Longitude:</label><br></br>
                        <input type='number' step='any' name='long'/>
                    <br></br>
                    <label>Latitude:</label><br></br>
                        <input type='number' step='any' name='lat'/>
                    <br></br>
                    <button type='submit'>Submit</button>
                </form>
            )}  

        </div>
    )
}

export default CreatePublicEvent;
