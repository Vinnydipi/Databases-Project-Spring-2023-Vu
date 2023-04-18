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
// Student Routes
const displayEvents = require('./routes/handleAccountTypes/handleStudent/handleDisplayEvents');
const reviewForm = require('./routes/handleAccountTypes/handleStudent/handleReviewForm');
const editReviews = require('./routes/handleAccountTypes/handleStudent/handleEditReview');
const rsoPage = require('./routes/handleAccountTypes/handleStudent/handleRsoPage');
// Admin Routes
const GetRsoIfAdmin = require('./routes/handleAccountTypes/handleAdmin/handleGetRsoIfAdmin');

// Init Express
const app = express();
// Init Cors
app.use(express.json());
app.use(cors({
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
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
app.use('/mainPage/MainRso', rsoPage);
app.use('/mainPage/editReviews', editReviews);
app.use('/mainPage/reviewForm', reviewForm);
app.use('/mainPage', displayEvents);
// Admin Pages
app.use('/mainPage/createEvent', GetRsoIfAdmin);
// Register page
app.use('/registerStudent', registerStudentRouter);
app.use('/registerSuperAdmin', registerSuperAdminRouter);
// Login page
app.use('/login', loginRouter);
// Used for the logout button on all the pages besides the register/login page
app.use('/logout', logoutRouter);


app.listen(3001, () => {
    console.log('running on port 3001');
});