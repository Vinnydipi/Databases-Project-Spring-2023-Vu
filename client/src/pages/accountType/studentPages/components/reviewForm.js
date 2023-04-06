/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import { UserContext } from '../../../utils/UserContext';

// Importing the logout feature
import { logout } from '../../../components/logout';

// Importing styling
import '../style/studentHome.css';

function ReviewForm()
{
    // Used to navigate around the web page
    const navigate = useNavigate();

    // Setting the rating/review variables to empty with useState
    const [rating, setRating] = useState(1);
    const [review, setReview] = useState('');

    // Setting both the variables to the correct input
    const handleRatingChange = (event) =>
    {
        setRating(event.target.value);
    }
    const handleReviewChange = (event) =>
    {
        setReview(event.target.value);
    }

    const test = () =>
    {
        console.log("Rating: " + rating);
        console.log("Review: " + review);
    }

    return (
        <div className="reviewForm">
            <form>
                <div className="reviewFormHeader">
                    <button className="exitButton">X</button>
                    {/* <h1>Reviewing EventName</h1> */}
                </div>
                <label>Rating:</label>
                <select value={ rating} 
                        onChange={ handleRatingChange }>
                    <option value="1">1 Star</option>
                    <option value="2">2 Stars</option>
                    <option value="3">3 Stars</option>
                    <option value="4">4 Stars</option>
                    <option value="5">5 Stars</option>
                </select>
                <label>
                    Review:
                    <textarea value={ review }
                              onChange={ handleReviewChange }></textarea> 
                </label>
                <div className="submitButton">
                    <button onClick={ test }>Submit Review</button>
                </div>
            </form>
        </div>
    )
}

export default ReviewForm;