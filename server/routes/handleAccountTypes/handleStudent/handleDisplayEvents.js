const express = require('express');
const db = require('../../../connection');

const router = express.Router();

router.post('/', (req, res) => 
{
    // Getting the data from the front end for which events to display
    const showPublic = req.body.isPublic;
    const showPrivate = req.body.isPrivate;
    const showRso = req.body.isRSO;
    const showAll = req.body.isDefault;

    console.log('showPublic:', showPublic);
    console.log('showPrivate:', showPrivate);
    console.log('showRso:', showRso);
    console.log('showAll:', showAll);


});

module.exports = router;
