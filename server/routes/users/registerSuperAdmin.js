const express = require('express');
const db = require('../../connection');

const router = express.Router();

// Used to put superadmin account information into the database
router.post('/', (req, res) => 
{

    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    const userType = req.body.userType;
    
    const domain = email.split('@')[1];

    // Query checking if a superadmin account is already in the DB for the uni
    const checkQuery = '\
        SELECT COUNT(*) AS count FROM users\
        WHERE userType = "superadmin"\
        AND universityId = ?';
    
    // Set the universityId
    uniId = getUniversityId(domain);

    // Check if there is already a superadmin with the same email domain or
    // university in the database
    db.query(checkQuery, [uniId], (err, result) =>
    {
        if (err)
        {
            // Error :(
            console.error(err);
            res.status(500).send('Error Registering Superadmin Account');
        }
        else // Delete if it breaks?
        {
            // Setting count to number of superadmins in table
            const count = result[0].count;

            if (count > 0)
            {
                // There is already a superadmin with the same universityId
                console.log('Error: A Superadmin with the same universityId already exists');
                res.status(400).send('Error: A Superadmin already exists at this university, please register as a student!');
            }
            else
            {
                // Insert the new superadmin account
                const insertQuery = '\
                    INSERT INTO users (username, email, password, userType, universityId)\
                    VALUES (?, ?, ?, ?, ?)';
                
                db.query(insertQuery,
                    [username, email, password, userType, uniId],
                    (err, result) =>
                    {
                        if (err)
                        {
                            // Error :(
                                console.log(err);
                                res.status(500).send('Error Registering Superadmin Account');
                        }
                        else 
                        {
                            // No Error :)
                            console.log('Superadmin Account Registered Successfully');
                            res.status(200).send('Superadmin Account Registered Successfully');
                        }
                    });
            }
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
