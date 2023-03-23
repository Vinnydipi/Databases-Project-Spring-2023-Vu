const express = require('express');
const db = require('../connection');

const router = express.Router();

// Used to put user information into the database
router.post('/', (req, res) => 
{

    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    const userType = req.body.userType;

    db.query("INSERT INTO users (username, email, password, userType) VALUES (?, ?, ?, ?)",
     [username, email, password, userType], 
     (err, result) => {
        if (err)
        {
            console.error(err);
            res.status(500).send('Error Registering User');
        }
        else
        {
            // Set the school id's to a specific number
            const ucfId = 1; // Domain: @knights.ucf.edu
            const ufId = 2; // Domain: @ufl.edu
            const otherSchool = 3; // any other email entered

            const domain = email.split('@')[1];

            // email matches ucf domain, set universityId = 1
            if (domain === 'knights.ucf.edu')
                setUniId(ucfId, email, res);
            // email matched UF domain, set universityId = 2
            if (domain === 'ufl.edu')
                setUniId(ufId, email, res);
            // email does not match any known school, set universityId = 3
            if (domain != 'knights.ucf.edu' && domain != 'ufl.edu')
                setUniId(otherSchool, email, res);
        }
     }
    );
});

function setUniId(idNum, email, res)
{
    // Setting the query
    const updateQuery = "UPDATE users SET universityId = ? WHERE email = ?";
    console.log(idNum, email);
    db.query(updateQuery, [idNum, email], (err, result) => {
        if (err)
        {
            console.error(err);
            res.status(500).send('Error setting user id');
        }
        else
        {
            console.log('User Registered Succesfully, Login To View Events');
            res.status(200).send('User Registered Succeesfully');  
        }
    });
}

module.exports = router;
