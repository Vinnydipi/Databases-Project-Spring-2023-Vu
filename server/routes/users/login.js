const express = require('express');
const db = require('../../connection');

const router = express.Router();

// Cookies
router.get('/', (req, res) => {
    if (req.session.user) 
    {
        res.send({ loggedIn: true, user: req.session.user })
    }
    else
    {
        res.send({ loggedIn: false })
    }
});

// Used to check if the user information entered from the login
// page is in the database and if so we move to the events page
router.post('/', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    db.query("SELECT * FROM users WHERE username = ? AND password = ?",
    [username, password], (err, result) => {
        if (err)
            res.send({err: err});
        
        if (result.length > 0) 
        {
            req.session.user = result;
            console.log(req.session.user);
            res.send({ username: result[0].username, password: result[0].password,
                        userType: result[0].userType, email: result[0].email,
                        idNum: result[0].userId});
        }
        else
            res.send({message: "Wrong username/password"});
    });
});

module.exports = router;