const express = require('express');
const db = require('../../../connection');

const router = express.Router();

// Getting all the reviews for the event to be reviewed
router.get('/', (req, res) =>
{
    const userId = req.query.userId;
    // Query for getting all reviews 
    const selectReviews = '\
        SELECT * FROM event_review WHERE userId = ?';
    
    db.query(selectReviews, [userId], (err, result) =>
    {
        res.send(result);
    });
});

// Update specific review
router.put('/', (req, res) =>
{
    // Variables for query
    // Passed in URL
    const commentId = req.query.commentId;
    const userId = req.query.userId;
    // Passed normally
    const newRating = req.body.newRating;
    const newReview = req.body.newReview;

    const updateQuery = '\
            UPDATE event_review SET rating = ?, review = ?\
            WHERE commentId = ?';
    
    db.query(updateQuery, [newRating, newReview, commentId, userId], (err, result) =>
    {
        if (err)
        {
            res.status(500).send(err);
        }
        else 
        {
            res.send(result[1]);
        }
    });
});

// Delete specific review
router.delete('/', (req, res) =>
{
    // Value from query 
    const commentId = req.query.commentId;

    // SQL query to Delete comment
    const deleteQuery = '\
            DELETE FROM event_review WHERE commentId = ?';
    
    db.query(deleteQuery, [commentId], (err, result) =>
    {
        if (err) 
        {
            res.status(500).send(err);
        }
        else
        {
            console.log('Review Deleted');
            res.send(result);
        }
    });
});

module.exports = router;