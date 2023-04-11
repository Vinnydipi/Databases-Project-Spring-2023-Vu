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

    // Check boxes, set to true so every event is shown when first loaded
    const [checkedPrivate, setCheckedPrivate] = useState(true);
    const [checkedPublic, setCheckedPublic] = useState(true);
    const [checkedRSO, setCheckedRSO] = useState(true);
    // Default (All are true)
    const [defaultView, setDefaultView] = useState(true);
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
    // Handles for each viewButton
    const handleCheckedPrivate = () =>
    {
        // Sets the private to be true
        setCheckedPrivate(true);
        setCheckedPublic(false);
        setCheckedRSO(false);
        setDefaultView(false);
        setH2Tag('Pivate');
        sendData();
    }
    const handleCheckedPublic = () =>
    {
        // Sets the public to be true
        setCheckedPrivate(false);
        setCheckedPublic(true);
        setCheckedRSO(false);
        setDefaultView(false);
        setH2Tag('Public');
        sendData();
    }
    const handleCheckedRSO = () =>
    {   
        // Sets the RSO to be true
        setCheckedPrivate(false);
        setCheckedPublic(false);
        setCheckedRSO(true);
        setDefaultView(false);
        setH2Tag('RSO');
        sendData();
    }
    const handleDefaultView = () =>
    {   
        // Default view brings up all available events
        setCheckedPrivate(true);
        setCheckedPublic(true);
        setCheckedRSO(true);
        setDefaultView(true);
        setH2Tag('All');
        sendData();
    }

    // Send the data to the backend for the specific view options
    const sendData = () => 
    {
        console.log('private:' + checkedPrivate);
        console.log('public:' + checkedPublic);
        console.log('rso:' + checkedRSO);
        console.log('all:' + defaultView);
        console.log('==========');

        // Make a request to the server 
        Axios.post('http://localhost:3001/studentHome', 
        {
            isPrivate: checkedPrivate,
            isPublic: checkedPublic,
            isRSO: checkedRSO,
            isDefault: defaultView,
        })
        .then((response) => 
        {
            setEventList(response.data);
        })
        .catch((error) => 
        {
          alert(error.message);
        });
    }

    // useEffect to get all the events information from the backend and
    // display them in the table
    // useEffect(() => {
    //     Axios.get('http://localhost:3001/studentHome').then((response) =>{
    //         setEventList(response.data);
    //     })
    // }, []);

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
            <div className="viewContainer">
                <div className="viewButtons">
                    <h2>View Options</h2>
                    <button className={checkedPrivate ? 'Active' : ''}
                        onClick={handleCheckedPrivate}>
                        Private Events
                    </button>
                    <button className={checkedPublic ? 'Active' : ''}
                        onClick={handleCheckedPublic}>
                        Public Events
                    </button>
                    <button className={checkedRSO ? 'Active' : ''}
                        onClick={handleCheckedRSO}>
                        RSO Events
                    </button>
                    <button className={defaultView ? 'Active' : ''}
                        onClick={handleDefaultView}>
                        All Events
                    </button>
                </div>
              <div className="eventTableWrapper">
                {/* Rendering the Review Form on/off */}
                {showReviewForm && (
                  <ReviewForm onClick={handleCloseReviewForm} />
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
        </div>
      );
      
}

export default StudentHome;