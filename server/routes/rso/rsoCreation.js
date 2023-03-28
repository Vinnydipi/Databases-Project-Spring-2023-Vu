const express = require('express');
const db = require('../../connection');

const router = express.Router();

// Used to put user information into the database
router.post('/', (req, res) => 
{
    // Get the info from the front end
    const name = req.body.rsoName;
    const email = req.body.email;

    
});

module.exports = router;