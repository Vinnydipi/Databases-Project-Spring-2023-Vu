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

    // Used to register a new RSO with status = 'PENDING'
    const submitRso = () => 
    {
        Axios.post('http://localhost:3001/createRso', {
        rsoName: rsoName,
        email: emailDomain,
        }).then(() => {
        alert('Successful insert');
        });
    };

    return (
        <div className='inputField'>
            <div>
                <button className="button" onClick={()=>navigate('/events')}>View Events</button>
            </div>
                <h1>RSO CREATION FORM</h1>
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
           
            <button onClick={ submitRso }>Submit RSO For Approval</button>
        </div>
    );
}

export default CreateRso;
