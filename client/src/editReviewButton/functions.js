// Functions used in the editReview.jsx file
import Axios from 'axios';

// Function to send which eventId we are updating along with
// the info to have updated 
export function handleEditReview(event, review, setEditId)
{
    event.preventDefault();
    setEditId(review.commentId);
}

// Cancel button, to revert to original review data
export function handleCancelClick(setEditId, setNewRating, setNewReview)
{
    setEditId(null);
    setNewRating(null);
    setNewReview('');
}
    
// Handles updating the users new Rating
export function handleNewRating(event, setNewRating)
{
    setNewRating(event);
}
// Handles updating the users new Review
export function handleNewReview(event, setNewReview)
{
    setNewReview(event);
}

export function handleSubmitNewData(event, editId, userId, newRating, newReview, setEditId)
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

export function handleDeleteReview(event, editId, setEditId)
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