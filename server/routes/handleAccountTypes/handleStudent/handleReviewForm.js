const express = require('express');
const db = require('../../../connection');

const router = express.Router();

// Router to get the info from reviewFrom and to upload to the DB
router.post('/', (req, res) => 
{
    const rating = req.body.rating;
    const review = req.body.rating;


});

module.exports = router;