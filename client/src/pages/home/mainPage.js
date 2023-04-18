/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';

// Importing the logout feature
import { logout } from '../components/logout';

// Import React Components
import Navigation from './mainPageComponents/navigation';
import ViewOptions from './mainPageComponents/viewOptions';
import Table from './mainPageComponents/table';

// Importing styling
import './mainPageStyle.css';

function StudentHome()
{
    // Used to navigate around the web app
    const navigate = useNavigate();
	  // useState for holding what type of events the user wants shown
	  const [viewOption, setViewOption] = useState('public');
    // Used to hold the events
    const [eventList, setEventList] = useState([]);
    // For the h1 tag
    const [h2Tag, setH2Tag] = useState('public');
	  // Getting the user type so we can render specific buttons 
	  // for a given user
	  const type = sessionStorage.getItem('userType');

    // useEffect to get all the events information from the backend and
    // display them in the table
    useEffect(() => {
      // User information needed in the backend
      const userEmail = sessionStorage.getItem('userEmail');
      const userId = sessionStorage.getItem('id');

      Axios.post('http://localhost:3001/mainPage',
      {
        choice: viewOption,
        email: userEmail,
        userId: userId,
      })
      .then((response) => {
        setEventList(response.data);
      })
      .catch((error) => {
        alert(error.message);
      })
    }, [viewOption, navigate]);  

    return (
        <div className="homePage">
			<div className="navigate">
				<Navigation navigate={ navigate } userType={ type } />
			</div>
			{/* page title */}
			<h1>HOME PAGE</h1>
				<div className='viewOptions'>
					<ViewOptions viewOption={ viewOption } setViewOption={ setViewOption } setH2Tag={ setH2Tag }/>
				</div>
				<div className='table'>
					<Table h2Tag={ h2Tag } navigate={ navigate } eventList={ eventList }/>
				</div>
        </div>
    );     
}

export default StudentHome;