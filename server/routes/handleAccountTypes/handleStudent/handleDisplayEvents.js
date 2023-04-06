const express = require('express');
const db = require('../../../connection');

const router = express.Router();

router.get('/', (req, res) => 
{
    const sqlSelect = 'SELECT * FROM events';

    db.query(sqlSelect, (err, result) => 
    {
        res.send(result);
    });
});

module.exports = router;
