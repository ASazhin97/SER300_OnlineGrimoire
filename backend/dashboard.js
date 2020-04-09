const express = require('express');

function createRouter(db, dbname){
    const router = express.Router();
    const owner ='';

    router.get('/all', function(req, res, next) {
        token = req.query.t;

        db.query(
            'SELECT * FROM ' +dbname+"."+token,
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

    router.post('/new', function(req, res, next) {
        token = req.query.t;
        name = req.query.n;
        hours = req.query.h;

        db.query(
            'INSERT INTO '+dbname+'.'+token+' (Name, HoursPlayed) VALUES (\"'+name+'\", '+hours+')',
            (error) => {
                if(error){
                    console.log(error);
                    res.status(500).json({status:'error'});
                } else {
                    res.status(200).json({status: 'ok'});
                }
            }
        )
    })

    return router;
}

module.exports = createRouter;