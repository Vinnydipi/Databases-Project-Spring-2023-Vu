/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';

// Importing the logout feature
import { logout } from '../../../components/logout';

// Importing styling
import '../style/studentHome.css';

// Importing the review Form
import ReviewForm from '../components/reviewForm';

function StudentHome()
{
    // Used to navigate around the web app
    const navigate = useNavigate();

	// useState for holding what type of events the user wants shown
	const [viewOption, setViewOption] = useState('public');
    // Used to open the review page, only true when user is uploading a review
    const [showReviewForm, setShowReviewForm] = useState(false);
    // Used to hold the events
    const [eventList, setEventList] = useState([]);
    // For the h1 tag
    const [h2Tag, setH2Tag] = useState('All');

    // Function to open the review page
    const handleOpenReview = (event) =>
    {
        setShowReviewForm(true);
        sessionStorage.setItem('curEvent', event);
    }
    // Function to close the review page
    const handleCloseReviewForm = () =>
    {
        setShowReviewForm(false);
    }

    // Send the data to the backend for the specific view options
    // const sendData = (event) => 
    // {
	// 	event.preventDefault();// Prevents the page from refreshing
	// 	const userEmail = sessionStorage.getItem('userEmail');

    //     // Make a request to the server 
    //     Axios.post('http://localhost:3001/studentHome', 
    //     {
	// 		choice: viewOption,
	// 		email: userEmail,
    //     })
    //     .then(() => {
	// 		alert('Updating Event List');
	// 	})
    //     .catch((error) => 
    //     {
    //       alert(error.message);
    //     });
    // }



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
              <button>View RSO's</button>
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
										}}/>
								Private Events
						</label>
						<label>
							<input type="radio" name="eventType"
									value="rso" checked={ viewOption === 'rso' }
									onChange={(e) => {
										setViewOption(e.target.value);
									}}/>
								RSO Events
						</label>
						<label>
							<input type="radio" name="eventType"
									value="public" checked={ viewOption === 'public' }
									onChange={(e) => {
										setViewOption(e.target.value);
									}}/>
							Public Events
						</label>
					</div>
					{/* <button type="submit" onClick={ sendData }>Apply</button> */}
				</div>
			</form>
              <div className="eventTableWrapper">
                {/* Rendering the Review Form on/off */}
                {showReviewForm && (
                  <ReviewForm onClick={ handleCloseReviewForm } />
                )}
                <div className="eventTable">
                  <h2>Viewing {h2Tag} Events</h2>
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
                            <button onClick={() =>
                              handleOpenReview(val.name)}>Review</button>
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