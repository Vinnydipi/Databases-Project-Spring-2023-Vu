// Imports
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');

// Declaring the routes
const registerRouter = require('./routes/register');
const loginRouter = require('./routes/login');
const logoutRouter = require('./routes/logout');

// Init Express
const app = express();
// Init Cors
app.use(express.json());
app.use(cors({
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST'],
    credentials: true
}));

// Init cookies
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
    session({
        key: 'userId',
        secret: 'KHAN_VU',
        resave: false,
        saveUninitialized: false,
        cookie: 
        {
            expires: 2 * 60 * 60 * 1000, // Cookie Lasts for 2 hours
        }
    })
);

// Routes
// Register page
app.use('/register', registerRouter);
// Login page
app.use('/login', loginRouter);
// Used for the logout button on all the pages besides the register/login page
app.use('/logout', logoutRouter);

app.listen(3001, () => {
    console.log('running on port 3001');
});