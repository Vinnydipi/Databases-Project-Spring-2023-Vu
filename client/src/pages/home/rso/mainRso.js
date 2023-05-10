/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';

// Logout feature
import { logout } from '../../components/logout';

// Import API functions
import { handleSubmitNewRso } from './API/handleSubmitNewRso';
import { handleJoinRso } from './API/handleJoin';
import { handleLeaveRso } from './API/handleLeaveRso'

// Import JSX
import RsoPage from './rsoPage';

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
        <div>
            <RsoPage
                rsoList={rsoList}
                rsoName={rsoName}
                setRsoName={setRsoName}
                navigate={navigate}
                handleJoinRso={handleJoinRso}
                handleLeaveRso={handleLeaveRso}
                handleSubmitNewRso={handleSubmitNewRso}
                logout={logout}
                uniId={uniId}
                userId={userId}
            />
        </div>
    )
}

export default MainRso;