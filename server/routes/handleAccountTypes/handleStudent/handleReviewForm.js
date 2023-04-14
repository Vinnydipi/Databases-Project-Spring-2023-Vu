const express = require('express');
const db = require('../../../connection');

const router = express.Router();

// Getting all the reviews for the event to be reviewed
router.get('/', (req, res) =>
{
    const eventId = req.query.eventId;
    // Query for getting all reviews 
    const selectReviews = '\
        SELECT * FROM event_review WHERE eventId = ?';
    
    db.query(selectReviews, [eventId], (err, result) =>
    {
        res.send(result);
    });
});

// Router to get the info from reviewFrom and to upload to the DB
router.post('/', (req, res) => 
{
    const eventId = req.body.eventId;
    const userId = req.body.userId;
    const review = req.body.review;
    const rate = req.body.rate;

    // Query for inserting a student account
    const insertReview = '\
        INSERT INTO event_review (eventId, userId, review, rating)\
        VALUES (?, ?, ?, ?)';   
    
    db.query(insertReview, [eventId, userId, review, rate],
        (err, result) =>
        {
            if (err)
            {
                // Error :(
                console.error(err);
                res.status(500).send('Error Submmiting Review');
            }
            else
            {
                // No error :)
                console.log('Review Submitted Successfully');
                res.status(200).send('Review Submitted Successfully');
            } 
        });
});

module.exports = router;