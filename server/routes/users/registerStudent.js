const express = require('express');
const db = require('../../connection');

const router = express.Router();

// Used to put student user information into the database
router.post('/', (req, res) => 
{

    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    const userType = req.body.userType;
    
    const domain = email.split('@')[1];

    // Query for inserting a student account
    const insertQuery = '\
        INSERT INTO users (username, email, password, userType, universityId)\
        VALUES (?, ?, ?, ?, ?)';

    // Setting the universityId 
    uniId = getUniversityId(domain);
    
    // The user is submitting a student account for creation
    // Query for if the user is just submitting a regular user account
    db.query(insertQuery,
        [username, email, password, userType, uniId], 
        (err, result) => {
            if (err)
            {
                // Error :(
                console.error(err);
                res.status(500).send('Error Registering User');
            }
            else
            {
                // No error :)
                console.log('User Registered Successfully');
                res.status(200).send('User Registered Successfully');
            }
        });
});

// Function to grab the email domain and set to the according number
function getUniversityId(domain)
{
    if (domain === 'knights.ucf.edu')
        return 1;
    else if (domain === 'ufl.edu')
        return 2;
    else
        return 3;
}

module.exports = router;
