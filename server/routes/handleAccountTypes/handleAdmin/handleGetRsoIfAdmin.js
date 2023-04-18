const express = require('express');
const db = require('../../../connection');

const router = express.Router();

// Getting all the RSO's that the logged in user is the admin of
router.get('/getRso', (req, res) =>
{
    const userId = req.query.userId;
    // Query for getting all reviews 
    const selectRso = '\
        SELECT * FROM rso WHERE creatorId = ? AND status = "ACTIVE"';
    
    db.query(selectRso, [userId], (err, result) =>
    {
        if (err)
        {
            console.log(err);
            res.status(500).send("Internal Server Error");
        }
        else if (result.length === 0)
        {
            res.status(404).send('No RSO Found');
        }
        else
        {
            res.send(result);
        }
    });
});

module.exports = router;