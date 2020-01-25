const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.post('/', (res, res) => {
    let feedback= req.body;
    console.log('this is the feedback', feedback);
    let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4);`;
    let values = [feedback.feels, feedback.understanding, feedback.support, feedback.comments]

    pool.query(queryText, values)
    .then(result => {
        res.sendStatus(201)
    }).catch(error => {
        console.log('error with POST', error);
        res.sendStatus(500);
    })
})


module.exports = router;