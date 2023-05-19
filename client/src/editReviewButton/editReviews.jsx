/* eslint-disable no-unused-vars */
import React, { Fragment, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';

// Import styles
import './editReview.css';

// Import components
import ReadOnlyRow from './components/readOnlyRow';
import EditTableRow from './components/editTableRows';

// Logout feature
import { logout } from '../components/logout'

// Import the functions used from functions.js
import {
    handleEditReview, 
    handleCancelClick,
    handleNewRating,
    handleNewReview,
    handleSubmitNewData,
    handleDeleteReview,
} from './functions';

function EditReviews()
{
    // Used to navigate around the web app
    const navigate = useNavigate();

    // Holds the users current reviews for all events
    const [curReviews, setCurReviews] = useState([]);

    // Holds the updated rate/review
    const [newRating, setNewRating] = useState(null);
    const [newReview, setNewReview] = useState('');

    // Gets the commentId that the user is Editting 
    const [editId, setEditId] = useState(null);

    // Getting the userId so we can retrieve the correct events
    const userId = sessionStorage.getItem('id');

    // Getting the information from the backend for all reviews
    // that belong to the eventId we are reviewing
    useEffect(() => 
    {
        Axios.get(`http://localhost:3001/mainPage/editReviews?userId=${userId}`)
            .then((response) =>
            {
                setCurReviews(response.data);
            })
            .catch((error) =>
            {
                console.log(error);
            });
    }, [userId, editId]);

    return (
        <div className='mainContainer'>
            STUDENT EVENT REVIEW PAGE
            <div className='taskBar'>
                <button onClick={logout}>Logout</button>
                <button onClick={() => navigate('/mainPage')}>Student Home</button>
            </div>
            <div className='tableWrapper'>
                <table className='contentTable'>
                    <thead>
                        <tr>
                            <th>Rating</th>
                            <th>Review</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {curReviews.map((review) => (
                            <Fragment key={ review.commentId }>
                                { editId === review.commentId ? (
                                    <EditTableRow 
                                        review={ review }
                                        handleCancelClick={ () => handleCancelClick(setEditId, setNewRating, setNewReview) }
                                        handleNewRating={(event) => handleNewRating(event, setNewRating)}
                                        handleNewReview={(event) => handleNewReview(event, setNewReview)}
                                        handleSubmitNewData={(event) =>
                                        handleSubmitNewData(event, editId, userId, newRating, newReview, setEditId)
                                        }
                                        handleDeleteReview={(event) => handleDeleteReview(event, editId, setEditId)}
                                    /> 
                                    ) : (
                                        <ReadOnlyRow review={review} handleEditReview={(event) => handleEditReview(event, review, setEditId)} />
                                    )}
                            </Fragment>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

    )
}

export default EditReviews;