const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'projectvu',
});

// Used to put user information into the database
app.post('/register', (req, res) => {

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
            console.log('User Registered Succesfully, Login To View Events');
            res.status(200).send('User Registered Succeesfully');
        }
     }
    );
});

// Used to check if the user information entered from the login
// page is in the database and if so we move to the events page
app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    db.query("SELECT * FROM users WHERE username = ? AND password = ?",
    [username, password], 
    (err, result) => {
        if (err)
        {
            res.send({err: err});
        }
        
        if (result.length > 0) 
        {
            res.send(result);
        }
        else
        {
            res.send({message: "Wrong username/password"});
        } 
    }
   );
});

app.listen(3001, () => {
    console.log('running on port 3001');
});