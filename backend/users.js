const express = require('express');
const uuid = require("uuid");

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

    router.post('/new', function(req, res, next) {
        username = req.query.u;
        password = req.query.p;
        userclass = req.query.c;
        first = req.query.f;
        last = req.query.l;
        news = req.query.n;
        email = req.query.e;
        token = uuid.v4();
        
        //localhost:8080/users/new/?u=user2&p=test2&c=mage&f=terry&l=Test&n=0&e=terry@test.com
        db.query(
            'INSERT INTO ' +dbname+ '.UserCRED (Username, Password, SessionToken, class, first_name, last_name, receiveNews, email) VALUES ( \"'+username+'\", \"'+password+'\",\"'+token+'\", \"'+userclass+'\", \"'+first+'\", \"'+last+'\", '+news+', \"'+email+'\");',
            (error) => {
                if(error){
                    console.log(error);
                    res.status(500).json({status:'error'});
                } else {
                    res.status(200).json({status: 'ok'});
                }
            }
        )

        //create a table for that user
    })

    router.get('/login', function(req, res, next) {
        name = req.query.n;
        pass = req.query.p;

        db.query(
            'SELECT SessionToken FROM ' +dbname+'.UserCRED WHERE Username = \"'+name+'\" AND Password = \"'+pass+'\"',
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

    router.get('/auth', function(req, res, next) {
        token = req.query.t;

        db.query(
            'SELECT SessionToken FROM ' +dbname+ '.UserCRED WHERE SessionToken = \"'+token+'\"',
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