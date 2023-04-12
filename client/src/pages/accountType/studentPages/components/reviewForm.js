/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';

// Importing styling
import '../style/reviewForm.css';

// Logout feature
import { logout } from '../../../components/logout';

// Passes the eventName for the h1 header!
function ReviewForm()
{
    // Used to navigate around the web app
    const navigate = useNavigate();
    // Refreshing the page
    const refresh = () => window.location.reload(true);

    // Setting the userName = to a variable to use later
    const userId = sessionStorage.getItem('id');
    // Gets the eventName in DB
    const curEvent = sessionStorage.getItem('curEvent');
    // Gets the eventId in DB
    const eventId = sessionStorage.getItem('eventId'); 
    // Set the useStates for review and rate
    const [rate, setRate] = useState(1);
    const [review, setReview] = useState('');

    const handleSubmit = () =>
    {
        Axios.post('http://localhost:3001/studentHome/reviewForm', {
                eventId: eventId,
                userId: userId,
                rate: rate,
                review: review,
            }).then((response) => 
            {
                console.log(response.data);
            })
            .catch((error) => 
            {
                console.log(error);
            })
    }

    return (
        <div className='studentReviewPage'>
            {/* Page Title*/}
            <title>Review Page</title>
                <h1>Review Page</h1>
                <div className='mainContainer'>
                    <div className='navigationbuttons'>
                        {/* Logout Button */}
                        <button onClick={ logout }>Logout</button>
                        {/* Navigates back to the Events page */}
                        <button onClick= {() => {
                            sessionStorage.removeItem('eventName');
                            navigate('/studentHome');
                        }}>View Events</button>
                    </div>
                    {/* This Form will be used to collect the data for the Event Review */}
                    <form className='reviewForm' id='reviewForm'>
                        <h2>Reviewing *insert event name*</h2>
                        <label htmlFor='rate'>Rate(1-5 Stars):</label>
                        <br></br>
                            <select id='rate' name='rate'
                                    onChange={(e) => {
                                        setRate(e.target.value);
                                    }} required>
                                <option value=''>Select a Rating</option>
                                <option value='1'>1 Star</option>
                                <option value='2'>2 Stars</option>
                                <option value='3'>3 Stars</option>
                                <option value='4'>4 Stars</option>
                                <option value='5'>5 Stars</option>
                            </select><br></br>
                        <label htmlFor='review'>Review:</label>
                        <br></br>
                        <textarea id='review' name='review' type='text' 
                                rows='5' cols='40'
                                onChange={(e) => {
                                    setReview(e.target.value);
                                }} required>
                        </textarea>
                        <br></br>
                        <br></br>
                        <button type='submit' onClick={ handleSubmit }>Submit Review</button>    
                    </form>
                </div>
        </div>
    );
}

export default ReviewForm;