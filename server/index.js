const express = require('express');
const cors = require('cors');

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const registerRouter = require('./API/register');
const loginRouter = require('./API/login');

const app = express();

app.use(express.json());
app.use(cors({
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST'],
    credentials: true
}));

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
    session({
        key: 'userId',
        secret: 'KHAN_VUUU',
        resave: false,
        saveUninitialized: false,
        cookie: {
            expires: 60 * 60 * 1000,
        }
    })
);

app.use('/register', registerRouter);
app.use('/login', loginRouter);


app.listen(3001, () => {
    console.log('running on port 3001');
});