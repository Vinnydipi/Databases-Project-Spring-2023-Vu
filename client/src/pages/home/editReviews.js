/* eslint-disable no-unused-vars */
import React, { Fragment, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';

// Importing styling
import './style/editReview.css';

// Import components
import ReadOnlyRow from './editReviewComponents/readOnlyRow'
import EditTableRow from './editReviewComponents/editTableRows';

// Logout feature
import { logout } from '../components/logout';

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

    // Function to send which eventId we are updating along with
    // the info to have updated 
    const handleEditReview = (event, review) =>
    {
        event.preventDefault();
        setEditId(review.commentId);
    }

    // Cancel button, to revert to original review data
    const handleCancelClick = () =>
    {
        setEditId(null);
        setNewRating(null);
        setNewReview('');
    }
    
    // Handles updating the users new Rating
    const handleNewRating = (event) =>
    {
        setNewRating(event);
    }
    // Handles updating the users new Review
    const handleNewReview = (event) =>
    {
        setNewReview(event);
    }

    const handleSubmitNewData = (event) =>
    {
        event.preventDefault();

        Axios.put(`http://localhost:3001/mainPage/editReviews?commentId=${editId}&userId=${userId}`,
        {
            newRating: newRating,
            newReview: newReview,
        }).then((response) =>
        {
           setEditId(null);
        })
        .catch((error) =>
        {
            alert(error.message);
        });
    }

    const handleDeleteReview = (event) =>
    {
        event.preventDefault();

        Axios.delete(`http://localhost:3001/mainPage/editReviews?commentId=${editId}`)
            .then((response) =>
            {
                setEditId(null);
            })
            .catch((error) =>
            {
                alert(error.message);
            });
    }

    return (
        <div className='mainContainer'>
            STUDENT EVENT REVIEW PAGE
            <div className='navButtons'>
                <button onClick={logout}>Logout</button>
                <button onClick={() => navigate('/mainPage')}>Student Home</button>
            </div>
            <div className='tableWrapper'>
                <div>
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
                                                handleCancelClick={ handleCancelClick }
                                                handleNewRating={ handleNewRating }
                                                handleNewReview={ handleNewReview }
                                                handleSubmitNewData={ handleSubmitNewData }
                                                handleDeleteReview={ handleDeleteReview }
                                            /> 
                                            ) : (
                                            <ReadOnlyRow 
                                                review={ review }
                                                handleEditReview={ handleEditReview }/>
                                            )
                                        }
                                    </Fragment>
                                ))}
                            </tbody>
                        </table>
                </div>
            </div>
        </div>

    )
}

export default EditReviews;