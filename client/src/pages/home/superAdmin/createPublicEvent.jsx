/* eslint-disable no-unused-vars */
import React from 'react';

// Import API's
import { handleCreatePublicEvent } from './API/handleCreatePublicEvent';
// Import Function
import { setData } from './functions';

function CreatePublicEvent({ setShowCreatePublic, showCreatePublic })
{
    return(
        <div className='publicEventContainer'>Creating Public Event
            {showCreatePublic && (
                <form className='publicEvent' onSubmit={(event) => setData(event, handleCreatePublicEvent, setShowCreatePublic) }>
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
