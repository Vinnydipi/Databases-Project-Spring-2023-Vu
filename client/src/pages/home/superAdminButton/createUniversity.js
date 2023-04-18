/* eslint-disable no-unused-vars */
import React from 'react';

// Import API
import { handleCreateUniversity } from '../API/superAdmin/handleCreateUniversity';

// Import CSS
import './style/createUni.css';

function CreateUniversity({ showCreateUni, setShowCreateUni })
{
    // The Public Event information to be submitted to the backend
    const setData = (event) =>
    {
        event.preventDefault();
        const formData = new FormData(event.target);

        const eventData = {
            name: formData.get('name'),
            location: formData.get('location'),
            description: formData.get('description'),
            domain: formData.get('emailDomain'),
        };
        
        // Set the eventInfo to the eventData we just got
        handleCreateUniversity(eventData);
        setShowCreateUni(false);
    }

    return(
        <div className='form'>
            {showCreateUni && (
                <form className='eventForm' onSubmit={ setData }>
                    <button onClick={() => setShowCreateUni(false)}>X</button>
                    <br></br>
                    <label>University Name:</label><br></br>
                        <input type='text' name='name'/>
                    <br></br>
                    <label>Location:</label><br></br>
                        <input type='text' name='location'/>
                    <br></br>
                    <label>Description:</label><br></br>
                        <textarea name='description'/>
                    <br></br>
                    <label>Email Domain(Do Not Include @):</label><br></br>
                        <input type='text' name='emailDomain'></input>
                    <br></br>
                    <button type='submit'>Submit</button>
                </form>
            )}
        </div>
    )
}

export default CreateUniversity;
