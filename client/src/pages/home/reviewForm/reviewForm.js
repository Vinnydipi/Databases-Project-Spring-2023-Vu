/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';

// Logout feature
import { logout } from '../../components/logout';

function ReviewForm()
{
    // Used to navigate around the web app
    const navigate = useNavigate();
    // Setting the userName = to a variable to use later
    const userId = sessionStorage.getItem('id');
    // Gets the eventName in DB
    const curEvent = sessionStorage.getItem('curEvent');
    // Gets the eventId in DB
    const eventId = sessionStorage.getItem('eventId'); 
    // Set the useStates for review and rate
    const [rate, setRate] = useState(1);
    const [review, setReview] = useState('');  
    // UseState for the reviews to be displayed
    const [viewReviewData, setReviewData] = useState([]);

    // Getting the information from the backend for all reviews
    // that belong to the eventId we are reviewing
    useEffect(() => 
    {
        Axios.get(`http://localhost:3001/mainPage/reviewForm?eventId=${eventId}`)
            .then((response) =>
            {
                setReviewData(response.data);
            })
            .catch((error) =>
            {
                console.log(error);
            });
    }, [eventId]);

    const handleSubmit = () =>
    {
        Axios.post('http://localhost:3001/mainPage/reviewForm', 
        {
                eventId: eventId,
                userId: userId,
                review: review,
                rate: rate,
        });                         
        
        setReviewData([...viewReviewData, 
            { eventId: eventId, userId: userId,
              review: review, rating: rate },]);
    };

    return (
        <div className='studentReviewPage'>
            {/* Page Title*/}
            <title>Review Page</title>
                <h1>Review Page</h1>
                <div className='mainContainer'>
                    <div className='taskBar'>
                        {/* Logout Button */}
                        <button onClick={ logout }>Logout</button>
                        {/* Navigates back to the Events page */}
                        <button onClick= {() => {
                            sessionStorage.removeItem('eventName');
                            sessionStorage.removeItem('eventId');
                            navigate('/mainPage');
                        }}>View Events</button>
                    </div>
                    {/* This Form will be used to collect the data for the Event Review */}
                    <form className='reviewForm' id='reviewForm' onSubmit={(e) => {
                                e.preventDefault(); // stop the default form submission>
                                handleSubmit();
                    }}>
                        <h2>Reviewing { sessionStorage.getItem('eventName') }</h2>
                        <label html='rate'>Rate(1-5 Stars):</label>
                        <br></br>
                            <select id='rate' name='rate'
                                    onChange={(e) => {
                                        setRate(e.target.value);
                                    }} required>
                              For  <option value=''>Select a Rating</option>
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
                        <button type='submit'>Submit Review</button>    
                    </form>         
                    <div className="eventTableWrapper">
                        <div className="eventTable">
                            <h3>Viewing { sessionStorage.getItem('eventName') } Reviews</h3>
                            <table>
                                <thead>
                                <tr>
                                    <th>Rating</th>
                                    <th>Review</th>
                                </tr>
                                </thead>
                                <tbody>
                                    {viewReviewData.map((val) => (
                                        <tr key={val.commentId}>
                                            <td>{val.rating === 1 ? '1 Star' : val.rating + ' Stars'}</td>
                                            <td>{val.review}</td>
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

export default ReviewForm;