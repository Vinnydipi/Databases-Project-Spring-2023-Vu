const express = require('express');
const mysql = require('mysql');
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

app.post('/register', (req, res) => {

    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;

    db.query("INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
     [username, email, password], 
     (err, result) => {
        if (err)
        {
            console.error(err);
            res.status(500).send('Error Registering User');
        }
        else
        {
            console.log('User Registered Succesfully');
            res.status(200).send('User Registered Succeesfully');
        }
     }
    );
});

app.listen(3001, () => {
    console.log('running on port 3001');
});