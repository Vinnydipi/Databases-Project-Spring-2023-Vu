/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';

// Import React Components
import TaskBar from './navigation';
import Table  from './table'

// Importing styles for the components
import '../styles/table.css'

function Home()
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
          <div className="taskBar">
            <TaskBar navigate={ navigate } userType={ type } />
          </div>
          {/* page title */}
          <h1>HOME PAGE</h1>
          <div className='table'>
            <Table  h2Tag={ h2Tag } 
                    navigate={ navigate } 
                    eventList={ eventList }
					// FOR VIEWOPTIONS COMPONENT
					viewOption={ viewOption }
					setViewOption={ setViewOption }
					setH2Tag={ setH2Tag }            
            />
          </div>
        </div>
    );     
}

export default Home;