/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';

// Importing styling
import '../style/reviewForm.css';

// Passes the eventName for the h1 header!
function ReviewForm()
{

    // Used to navigate around the web app
    const navigate = useNavigate();
    // Refreshing the page
    const refresh = () => window.location.reload(true);

    // Setting the rating/review variables to empty with useState
    const [rating, setRating] = useState(1);
    const [review, setReview] = useState('');

    // Setting the userName = to a variable to use later
    const curUserName = sessionStorage.getItem('curUser');
    const curEvent = sessionStorage.getItem('curEvent');

    // Testing purposes, delete later
    useEffect(() => {
        console.log('Rating:', rating);
        console.log('Review:', review);
    }, [rating, review]);

    // Submit the form information to the backend
    const submitReview = () =>
    {
        Axios.post('http://localhost:3001/studentHome', {
            rating: rating,
            review: review,
        }).then(() =>
        {
            alert('Review Submitted');
        }).catch((error) => 
        {
            alert(error.message);
        });
    };

    return (
        <div className="reviewForm">
            <form>
                <div className="reviewFormHeader">
                    <h1>Reviewing { curEvent } </h1>
                    <p>User Creating Review: { curUserName } </p>
                    <button className="exitButton" type="button"
                            onClick={() => {
                                sessionStorage.removeItem('curEvent');
                                refresh();
                            }}
                    >X</button>
                </div>
                <label>Rating:</label>
                <select onChange={(e) => {
                            setRating(e.target.value);
                }}>
                    <option value="1">1 Star</option>
                    <option value="2">2 Stars</option>
                    <option value="3">3 Stars</option>
                    <option value="4">4 Stars</option>
                    <option value="5">5 Stars</option>
                </select>
                <label>
                    Review:
                    <textarea onChange={(e) => {
                                setReview(e.target.value);
                    }}>
                    </textarea> 
                </label>
                <div className="submitButton">
                    <button onClick={ submitReview }>Submit Review</button>
                </div>
            </form>
        </div>
    )
}

export default ReviewForm;