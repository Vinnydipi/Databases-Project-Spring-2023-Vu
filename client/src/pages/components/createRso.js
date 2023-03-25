/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Axios from 'axios';

import { useNavigate } from 'react-router-dom';

function CreateRso()
{
    // Used to navigate back to Events page
    const navigate = useNavigate();

    // useStates for the rso information
    const [rsoName, setRsoName] = useState('');
    const [emailDomain, setEmailDomain] = useState('');
    const [userName, setUserName] = useState('');

    return (
        <div className='inputField'>
            <div>
                <button className="button" onClick={()=>navigate('/events')}>View Events</button>
            </div>
                <h1>Start Creating an RSO</h1>
            <div>
                <label>Rso Name</label>
                <input type='text' onChange={(e) => {
                    setRsoName(e.target.value);
                }}></input>
            </div>
            <div>
                <label>University Email</label>
                <input type='text' onChange={(e) => {
                    setEmailDomain(e.target.value);
                }}></input>
            </div>
            <div>
                <label>Enter future Admin Email</label>
                <input type='text' onChange={(e) => {
                    setUserName(e.target.value);
                }}></input>
            </div>
            
            <button>Submit RSO</button>
        </div>
    );
}

export default CreateRso;
