/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';

function CreateEvent()
{
    // Used to Navigate to the different Pages
    const navigate = useNavigate();

    // Info used for the registering of a new event
    const [eventName, setEventName] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [dateAndTime, setDateAndTime] = useState('');
    const [mapLink, setMapLink] = useState('');
    const [phoneNum, setPhoneNum] = useState('');
    const [contactEmail, setContactEmail] = useState('');
    const [hostRso, setHostRso] = useState('');
    const [access, setAccess] = useState('');

    return (
        <div>
            <div>
                <button className="button" onClick={()=>navigate('/events')}>View Events</button>
            </div>
            <h1>CREATE EVENT PAGE</h1>
            <div className='inputField'>
                <div>
                    <label>Event Name</label>
                    <input type='text'
                        onChange={(e) => {
                            setEventName(e.target.value);
                        }}></input>
                </div>
                <div>
                    <label>Category</label>
                    <select name='category' onChange={(e) => {
                        setCategory(e.target.value);
                    }}>
                        <option>Select Category</option>
                        <option value='social'>Social</option>
                        <option value='other'>Other</option>
                    </select>
                </div>
                <div>
                    <label>Description</label>
                    <textarea type='text' onChange={(e) => {
                        setDescription(e.target.value);
                    }}></textarea>
                </div>
                <div>
                    <label>Date and Time</label>
                    <input type='datetime-local' onChange={(e) => {
                        setDateAndTime(e.target.value);
                    }}></input>
                </div>
                <div>
                    <label>Maps Link</label>
                    <input type='text' onChange={(e) => {
                        setMapLink(e.target.value);
                    }}></input>
                </div>
                <div>
                    <label>Contact Phone Number</label>
                    <input type='text' onChange={(e) => {
                        setPhoneNum(e.target.value);
                    }}></input>
                </div>
                <div>
                    <label>Contact Email</label>
                    <input type='text' onChange={(e) => {
                        setContactEmail(e.target.value);
                    }}></input>
                </div>
                <div>
                    <label>Host RSO</label>
                    <input type='text' onChange={(e) => {
                        setHostRso(e.target.value);
                    }}></input>
                </div>
                <div>
                    <label>Event Access:</label>
                    <select name='availability' onChange={(e) => {
                        setAccess(e.target.value);
                    }}>
                        <option>Select</option>
                        <option value='0'>Private</option>
                        <option value='1'>Public</option>
                        <option value='2'>RSO</option>
                    </select>
                </div>
            </div>  
            <button>Create Event NF</button>
        </div>
    );
}

export default CreateEvent;