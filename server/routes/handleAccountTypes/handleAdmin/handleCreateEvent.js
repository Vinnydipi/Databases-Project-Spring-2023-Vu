const express = require('express');
const db = require('../../../connection');
const bodyParser = require('body-parser');

const router = express.Router();

// parse application/x-www-form-urlencoded
router.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
router.use(bodyParser.json());

router.post('/createEvent', (req, res) =>
{
    const { name, category, description, time, phone, email, isPrivate,
            hostRso, long, lat, rsoID } = req.body; // Getting the form data

    const insertQuery = '\
            INSERT INTO events (name, category, description, time, contactPhone, contactEmail,\
                                isApproved, isPrivate, hostRso, longitude, latitude, rsoID)\
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';

    console.log("making insert");

    db.query(insertQuery, [name, category, description, time, phone, email, 1, isPrivate,
                hostRso, long, lat, rsoID], (err, result) =>
                {
                    if (err)
                    {
                        // Error :(
                        console.error(err);
                        res.status(500).send('Error Creating Event');
                    }
                    else
                    {
                        // No error :)
                        res.status(200).send('Event Created Successfully, Create New Event Or Close the Form!');
                    }
                });
});

module.exports = router;