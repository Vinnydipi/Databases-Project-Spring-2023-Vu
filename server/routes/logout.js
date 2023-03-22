// Logs the user out and returns to the Login/Register page

const express = require('express');
const router = express.Router();

// Logout Route
router.get('/', (req,res) => 
{
    res.clearCookie('userId'); // Clear the 'userId' Cookie
    res.sendStatus(200); // Send a success response to the client
    console.log('User Logged Out');
});

module.exports = router;