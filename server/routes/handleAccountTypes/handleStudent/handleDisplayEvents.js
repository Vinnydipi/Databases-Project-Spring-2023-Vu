const express = require('express');
const db = require('../../../connection');

const router = express.Router();

function getUniversityId(domain)
{
    if (domain === 'knights.ucf.edu')
        return 'knights.ucf.edu';
    else if (domain === 'ufl.edu')
        return 'ufl.edu';
    else
        return 'NONE';
}

function getQuery(option, domain, ID)
{

    // Declaring the SQL query as empty so it can be updated depending on viewOption
    let sqlGetEvents = '';
    // determing what out sql query will be based on viewOption
    if (option === 'public')
    {
        // This is where only public events will be shown (default option)
        sqlGetEvents = "SELECT * FROM events WHERE rsoID = 2 AND isPrivate = 0";
    }
    if (option === 'private')
    {
        // This is where only private events will be shown
        sqlGetEvents ="SELECT * FROM events WHERE isPrivate = 1 AND contactEmail LIKE '%"+domain +"'";
    }
    if (option === 'rso')
    {
        // This is where only rso events will be shown 
        sqlGetEvents = "SELECT e.* FROM events e\
                        INNER JOIN rso_members rm ON e.rsoID = rm.rso_id\
                        WHERE rm.user_id = '"+ ID + "' ";
    }
    return sqlGetEvents;
}

router.post('/', (req, res) => 
{
    // Setting the viewOption from the front end to the const 
    // so we can get the correct events from the database
    const viewOption = req.body.choice;
    const userEmail = req.body.email;
    const userId = req.body.userId;
    // Gets the domain of the email
    const emailDomain = getUniversityId(userEmail.split('@')[1]);

    const eventQuery = getQuery(viewOption, emailDomain, userId);

    console.log(eventQuery);

    // Query the DB and return the correct events to the front end for viewing
    db.query(eventQuery, (err, results) => {
        if (err)
        {
            // Handles errors
            console.log(err);
            res.status(500).send('Error retreiving Events');
        }
        else 
        {
            console.log(results);
            // Sends the events back to the front end as a JSON object
            res.json(results);
        }
    })
});

    // GET request
    // router.get('/', (req, res) => {})

module.exports = router;
