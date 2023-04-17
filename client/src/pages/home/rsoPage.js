/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';

// Logout feature
import { logout } from '../components/logout';

// Import API functions
import { handleSubmitNewRso } from './API/handleSubmitNewRso';
import { handleJoinRso } from './API/handleJoin';
import { handleLeaveRso } from './API/handleLeaveRso'

function MainRso()
{
    // Used to navigate around the web app
    const navigate = useNavigate();

    // useState used to hold the RSO name to be sent to the backend
    const [rsoName, setRsoName] = useState('');
    // useState used to hold RSO's in the database and display them in the table
    const [rsoList, setRsoList] = useState([]);

    const uniId = sessionStorage.getItem('universityId')
    const userId = sessionStorage.getItem('id')

    // useEffect to show RSO's in the database with two actions
    // 1. Join the RSO if you are not currently a member
    // 2. Leave and RSO you are a member of
    useEffect(() => 
    {
        Axios.get(`http://localhost:3001/mainPage/MainRso?uniId=${uniId}&userId=${userId}`)
        .then((response) =>
            {
                setRsoList(response.data);
            })
            .catch((error) =>
            {
                console.log(error);
            });
    }, [rsoName, uniId, userId]);

    return (
        <>
        <div className='navButtons'>
            <button onClick={ logout }>Logout</button>
            <button onClick={() => navigate('/mainPage')}>Home</button>
        </div>
            <div className='inputForm'>
                RSO PAGE
                <form className='createRsoForm' id='createRsoForm' onSubmit={(e) =>
                {
                    e.preventDefault();
                    handleSubmitNewRso(rsoName, uniId, userId);
                }}>
                    <h2>Submit New RSO</h2>
                    <label htmlFor='name'>RSO Name:</label>
                    <input type='text' id='name' onChange={(e) =>
                    {
                        setRsoName(e.target.value);
                    }}></input>
                    <br></br>
                    <button type='submit'>Submit </button>
                </form>
            </div>
            <div className='table'>
                <h1>Active Rso's</h1>
                <table>
                    <thead>
                            <tr>
                                <th>RSO Name</th>
                                <th>University</th>
                                <th>Total Members</th>
                                <th>Status</th>
                                <th>Member</th>
                                <th>Actions</th>
                            </tr>
                    </thead>
                    <tbody>
                        {rsoList.map((rso) => (
                            <tr key={rso.rsoId}>
                                <td>{rso.name}</td>
                                <td>{rso.universityId === 1 ? 'UCF' : 'N/A'}</td>
                                <td>{rso.memberCount}</td>
                                <td>{rso.status}</td>
                                <td>{rso.isMember ? 'Member' : 'Not a Member'}</td>
                                <td>
                                    <button onClick={() => 
                                    {
                                        if (rso.isMember)
                                            handleLeaveRso(rso.rsoId, userId);
                                        else
                                            handleJoinRso(rso.rsoId, userId);
                                    }}>
                                        {rso.isMember ? 'Leave' : 'Join'}
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default MainRso;