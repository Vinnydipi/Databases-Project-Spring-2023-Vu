/* eslint-disable no-unused-vars */
import React from 'react';

// Importing Styles
import './formStyle.css'

// Import API's
import { handleCreatePublicEvent } from './API/handleCreatePublicEvent';
// Import Function
import { setData } from './functions';

function CreatePublicEvent({ setShowCreatePublic, showCreatePublic })
{
    return(
        <div className='createFormWrapper'>Creating Public Event
            {showCreatePublic && (
                <form className='createForm' onSubmit={(event) => setData(event, handleCreatePublicEvent, setShowCreatePublic) }>
                    <h1 className='title'>New Public Event</h1>
                    <label>Event Name:</label>
                        <input placeholder='Event Name' type='text' name='name' required/>
                    <br></br>
                    <label>Category:</label>
                        <input placeholder='Category Type' type='text' name='category' required/>
                    <br></br>
                    <label>Description:</label>
                        <textarea placeholder='200 Characters Max' name='description' required/>
                    <br></br>
                    <label>Date/Time:</label>
                        <input type='datetime-local' name='time' required/>
                    <br></br>
                    <label>Contact Number:</label>
                        <input placeholder='(xxx)-xxx-xxxx' type='tel' name='phone' required/>
                    <br></br>
                    <label>Contact Email:</label>
                        <input placeholder='Creators Email' type='email' name='email' required/>
                    <br></br>
                    <label>Longitude:</label>
                        <input placeholder='NORTH(+)' type='number' step='any' name='long' required/>
                    <br></br>
                    <label>Latitude:</label>
                        <input placeholder='WEST(-)' type='number' step='any' name='lat' required/>
                    <br></br>
                    <div className='submit-cancel-wrapper'>
                        <button className='sub-cancel' type='submit'>Submit</button>
                        <button className='sub-cancel' onClick={() => setShowCreatePublic(false)}>Cancel</button>
                    </div>
                </form>
            )}  
        </div>
    )
}

export default CreatePublicEvent;
