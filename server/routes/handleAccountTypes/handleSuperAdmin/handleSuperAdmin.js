const express = require('express');
const db = require('../../../connection');

const router = express.Router();

router.post('/createPublicEvent', (req, res) =>
{
    // Gets the Form Data from front end
    const { name, category, description, time, phone, email, long, lat } = req.body;

    const insertQuery = '\
            INSERT INTO events (name, category, description, time, contactPhone, contactEmail,\
                                isApproved, isPrivate, hostRso, longitude, latitude, rsoID)\
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';

    db.query(insertQuery, [name, category, description, time, phone, email, 1, 1, 'NONE', long, lat, 2],
        (err, result) =>
        {
            if (err)
            {
                console.log(err);
                res.status(500).send('Error Creating Event');
            }
            else 
            {
                res.status(200).send('Public Event Created Successfully!');
            }
        });
});

router.post('/createUniversity', (req, res) => 
{
    // Get the form data
    const { name, location, description, domain } = req.body;

    const insertQuery = '\
            INSERT INTO universities (name, location, description, numStudents, emailDomain)\
                            VALUES (?, ?, ?, ?, ?)';

    db.query(insertQuery, [name, location, description, 0, domain], (err, result) =>
    {
        if (err)
        {
            if (err.code === 'ER_DUP_ENTRY')
            {
                console.log(err);
                res.status(400).send('University already Exists');
            }
            else
            {
                console.log(err);
                res.status(500).send('Error Creating University');
            }
        }
        else
        {
            res.status(200).send('University Created Successfully');
        }
    });
});

module.exports = router;
