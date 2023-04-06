/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';

// Importing the logout feature
import { logout } from '../../../components/logout';

// Importing styling
import '../style/studentHome.css';
// For the check box...idk man
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

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
    // Used to open the review page, only true when user is uploading a review
    const [showReviewForm, setShowReviewForm] = useState(false);
    // Used to hold the events
    const [eventList, setEventList] = useState([]);

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
    // Handles for each checkBox 
    // The '!' negates the current value, so !true = false and !false = true
    const handleCheckedPrivate = () =>
    {
        setCheckedPrivate(!checkedPrivate);
    }
    const handleCheckedPublic = () =>
    {
        setCheckedPublic(!checkedPublic);
    }
    const handleCheckedRSO = () =>
    {
        setCheckedRSO(!checkedRSO);
    }

    // useEffect to get all the events information from the backend and
    // display them in the table
    useEffect(() => {
        Axios.get('http://localhost:3001/studentHome').then((response) =>{
            setEventList(response.data);
        })
    }, []);

return(
    <div className="studentHomePage">
            {/* page title */}
            STUDENT HOME PAGE
        <div className="navigationButtons">
            {/* Logs the user out and returns to the login page*/}
            <button onClick={ logout }>Logout</button>
            {/* Navigates to the RSO page */}
            <button>View RSO's</button>
        </div>
        <div className="checkBoxes">
            {/* INPUT FOR CHECKED PRIVATE BOX */}
            <input type="checkbox" checked={ checkedPrivate } onChange={ handleCheckedPrivate }/>
            <span className="privateCheckMark">
                { checkedPrivate && <FontAwesomeIcon icon={ faCheck }/> }
                {/* button name */}
                Private Events
            </span>
            {/* INPUT FOR CHECKED PUBLIC BOX */}
            <input type="checkbox" checked={ checkedPublic } onChange={ handleCheckedPublic }/>
            <span className="privateCheckMark">
                { checkedPublic && <FontAwesomeIcon icon={ faCheck }/> }
                {/* button name */}
                Public Events
            </span>
            {/* INPUT FOR CHECKED RSO BOX  */}
            <input type="checkbox" checked={ checkedRSO } onChange={ handleCheckedRSO }/>
            <span className="privateCheckMark">
                { checkedRSO && <FontAwesomeIcon icon={ faCheck }/> }
                {/* button name */}
                RSO Events
            </span>
        </div>
            <div className="eventTableWrapper">
                {/* Rendering the Review Form on/off */}
                {showReviewForm && 
                (<ReviewForm onClick={ handleCloseReviewForm }/>
                )}
                <div className="eventTable">
                    <table>
                        <thead>
                            <tr>
                                <th>Event Name</th>
                                <th>Category</th>
                                <th>Description</th>
                                <th>Time</th>
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
                            {eventList.map( (val) => (
                                <tr key={val.eventId}>
                                    <td>{val.name}</td>
                                    <td>{val.category}</td>
                                    <td>{val.description}</td>
                                    <td>{val.time}</td>
                                    <td>{val.contactPhone}</td> 
                                    <td>{val.contactEmail}</td>
                                    <td>{val.isApproved === 0 ? "Pending Approval" : "Active"}</td>
                                    <td>{val.isPrivate === 1 ? "Private" : "Public"}</td>
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
    );
}

export default StudentHome;