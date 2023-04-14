/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';

// Importing the logout feature
import { logout } from '../../../components/logout';

// Importing styling
import '../style/studentHome.css';

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

    // useEffect to get all the events information from the backend and
    // display them in the table
    useEffect(() => {
      // User information needed in the backend
      const userEmail = sessionStorage.getItem('userEmail');
      const userId = sessionStorage.getItem('id');

      Axios.post('http://localhost:3001/studentHome',
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
    }, [viewOption]);  

    return (
        <div className="studentHomePage">
          {/* page title */}
          <h1>STUDENT HOME PAGE</h1>
          <div className="mainContainer">
            <div className="navigationButtons">
                {/* Logs the user out and returns to the login page*/}
                <button onClick={logout}>Logout</button>
                {/* Navigates to the RSO page */}
                <button onClick={() => navigate('/studentHome/MainRso')}>View RSO's</button>
            </div>
			{/* Handles updating which events are shown */}
			<form>
				<div className="viewContainer">
					<div className="viewButtons">
						<h3>View Options</h3>
						<label>
							<input type="radio" name="eventType"
									value="private" checked={ viewOption === 'private' }
									onChange={(e) => {
										setViewOption(e.target.value);
                                        setH2Tag(e.target.value);
										}}/>
								Private Events
						</label><br></br>
						<label>
							<input type="radio" name="eventType"
									value="rso" checked={ viewOption === 'rso' }
									onChange={(e) => {
										setViewOption(e.target.value);
                                        setH2Tag(e.target.value);
									}}/>
								RSO Events
						</label><br></br>
						<label>
							<input type="radio" name="eventType"
									value="public" checked={ viewOption === 'public' }
									onChange={(e) => {
										setViewOption(e.target.value);
                                        setH2Tag(e.target.value);
									}}/>
							    Public Events
						</label><br></br>
					</div>
				</div>
			</form>
              <div className='eventTableWrapper'>
                <div className='eventTable'>
                  <h2>viewing {h2Tag} events</h2>
                  <button onClick={ () => navigate('/studentHome/editReviews') }>EDIT REVIEWS</button>
                  <table>
                    <thead>
                      <tr>
                        <th>Event Name</th>
                        <th>Category</th>
                        <th>Description</th>
                        <th>Date/Time</th>
                        <th>Contact Number</th>
                        <th>Contact Email</th>
                        <th>isApproved</th>
                        <th>isPrivate</th>
                        <th>Host RSO</th>
                        <th>long.</th>
                        <th>lat.</th>
                        <th>Review Event</th>
                      </tr>
                    </thead>
                    <tbody>
                      {eventList.map((val) => (
                        <tr key={val.eventId}>
                          <td>{val.name}</td>
                          <td>{val.category}</td>
                          <td>{val.description}</td>
                          <td>{val.time}</td>
                          <td>{val.contactPhone}</td>
                          <td>{val.contactEmail}</td>
                          <td>{val.isApproved === 0 ? 'Pending Approval' : 'Active'}</td>
                          <td>{val.isPrivate === 1 ? 'Private' : 'Public'}</td>
                          <td>{val.hostRso}</td>
                          <td>{val.longitude}</td>
                          <td>{val.latitude}</td>
                          <td>
                            {/* Navigates to the review page  */}
                            {/* And stores the event name in sessionStorage */}
                            <button onClick={() => {
                                sessionStorage.setItem('eventName', val.name);
                                sessionStorage.setItem('eventId', val.eventId);
                                navigate('/studentHome/ReviewForm');
                            }}>Review Event</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
          </div>
        </div>
      );
      
}

export default StudentHome;