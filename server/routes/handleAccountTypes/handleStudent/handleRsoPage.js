const express = require('express');
const db = require('../../../connection');

const router = express.Router();

// This is for when a user creates a new RSO.  It first adds to the RSO table
// then it will add to the rso_members table if it did not have an error
router.post('/', (req, res) =>
{
    const { name, universityId, status, creatorId } = req.body;

    // sql query to add a new rso and add a member to the rso 
    const addRsoQuery = '\
        INSERT INTO rso (name, universityId, memberCount, status, creatorId)\
        VALUES (?, ?, ?, ?, ?);';

    db.query(addRsoQuery, [name, universityId, 1, status, creatorId], (err, results) =>
    {
        if (err) 
        {
            console.log(err);
            res.sendStatus(500);
            return;
        }
        else
        {
            // Getting the rsoId from the insert above
            const rsoId = results.insertId;
            const addMemberQuery = '\
            INSERT INTO rso_members(rso_id, user_id, isAdmin)\
            VALUES(?, ?, ?);';
    
            // Now we need to update rso_members
            db.query(addMemberQuery, [rsoId, creatorId, 0], (err, results) =>
            {
                if (err)
                {
                    console.log(err);
                    res.sendStatus(500);
                    return;
                }
                console.log(results);
                res.sendStatus(200);
            });
        }
    });
});

// Getting the RSO's from the rso table to display on front end
router.get('/', (req, res) =>
{
    const uniId = req.query.uniId;
    const userId = req.query.userId;

    // SQL query
    const selectQuery = 'SELECT * FROM rso WHERE rsoId != 2 AND universityId = ?'
    
    const selectMembersQuery = 'SELECT * FROM rso_members WHERE user_id = ?';

    db.query(selectQuery, [uniId], (err, results) =>
    {
        if (err)
        {
            console.log(err);
            res.sendStatus(500);
            return;
        }
        
        // Setting rsoList to the results of the above query
        const rsoList = results;

        db.query(selectMembersQuery, [userId], (err, results) =>
        {
            if (err)
            {
                console.log(err);
                res.sendStatus(500);
                return;
            }

            const memberList = results.map(result => result.rso_id);

            rsoList.forEach(rso => 
            {
                rso.isMember = memberList.includes(rso.rsoId);
            });
            
            res.send(rsoList);
        });
    });
});

// Used to remove a user from a RSO, if the RSO has 0 users after leaving, the RSO
// needs to be deleted
router.delete('/', (req, res) =>
{
    const {rsoId, userId } = req.query;

    // Sql query to remove user from given RSO
    // If the RSO new user count after user is removed = 0
    // Then we need to delete the RSO
    const leaveQuery = 'DELETE FROM rso_members WHERE rso_id = ? AND user_id = ?';

    db.query(leaveQuery, [rsoId, userId], (err, result) => 
    {
        if (err)
        {
            console.log(err);
            res.status(500).send('Error deleting RSO member');
        }
        else
        {
            // Success
            res.sendStatus(200);
        }
    });
});

router.post('/join', (req, res) => 
{
    const rsoId = req.query.rsoId;
    const userId = req.query.userId;

    // SQL query
    const joinQuery = 'INSERT INTO rso_members (rso_id, user_id, isAdmin) VALUES (?, ?, ?)';

    db.query(joinQuery, [rsoId, userId, 0], (err, results) =>
    {
        if (err)
        {
            console.log(err);
            alert("Error joing RSO, try again");
        }
        else
        {
            console.log("Joined RSO");
            res.sendStatus(200);
        }
    });
});

module.exports = router;