const express = require('express');
const db = require('../../../connection');

const router = express.Router();

// Router to get the info from reviewFrom and to upload to the DB
router.post('/', (req, res) => 
{
    const eventId = req.body.eventId;
    const userId = req.body.userId;
    const rate = req.body.rate;
    const review = req.body.review;

    console.log("Event:" + eventId);
    console.log("User:" + userId);
    console.log("rate:" + rate);
    console.log("review:" + review);

});

module.exports = router;