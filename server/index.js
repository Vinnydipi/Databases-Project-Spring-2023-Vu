// Imports
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');

// Declaring the routes
const registerStudentRouter = require('./routes/users/registerStudent');
const registerSuperAdminRouter = require('./routes/users/registerSuperAdmin');
const loginRouter = require('./routes/users/login');
const logoutRouter = require('./routes/components/logout');
const rsoCreationRouter = require('./routes/rso/rsoCreation');
// Student Routes
const displayEvents = require('./routes/handleAccountTypes/handleStudent/handleDisplayEvents');
const reviewForm = require('./routes/handleAccountTypes/handleStudent/handleReviewForm');
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
// Student Pages
app.use('/studentHome/reviewForm', reviewForm);
app.use('/studentHome', displayEvents);
// Register page
app.use('/registerStudent', registerStudentRouter);
app.use('/registerSuperAdmin', registerSuperAdminRouter);
// Login page
app.use('/login', loginRouter);
// Used for the logout button on all the pages besides the register/login page
app.use('/logout', logoutRouter);
// Used for inserting a new rso to the database with the status of pending
app.use('/createRso', rsoCreationRouter);

app.listen(3001, () => {
    console.log('running on port 3001');
});