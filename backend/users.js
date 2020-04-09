const express = require('express');

function createRouter(db, dbname) {
    const router = express.Router();
    const owner = '';

    router.get('/all', function (req, res, next) {
        db.query(
            'SELECT * FROM ' +dbname+ '.UserCRED',
            (error, results) => {
                if (error) {
                    console.log(error);
                    res.status(500).json({status: 'error'});
                } else {
                    console.log(results);
                    res.status(200).json(results);
                }
            }
        )
    })

    return router;
}

module.exports = createRouter;