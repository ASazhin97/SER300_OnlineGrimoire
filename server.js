
//Install express server
const express = require('express');
const path = require('path');
const {Client} = require('pg');
const mysql = require('mysql');

// //SQL CONNECTION
// const connection = mysql.createConnection({
//   host     : 'pwcspfbyl73eccbn.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
//   user     : 'o0vt0a320a2xg8qd',
//   password : 'l6b61466v7zahdgb',
//   database : 'u7njsrjyrva1zxi9'
// });
var connection = mysql.createConnection("mysql://o0vt0a320a2xg8qd:l6b61466v7zahdgb@pwcspfbyl73eccbn.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/u7njsrjyrva1zxi9");

connection.connect();

connection.query(
  'SELECT * FROM u7njsrjyrva1zxi9.UserCRED ORDER BY ID ASC',
  (error, results) => {
    if (error) {
      console.log(error);
    } else {
      console.log(results);
    }
  }
);


const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + `/dist/OnlineGrimoire`));

app.get('*', function(req,res) {
    
res.sendFile(path.join(__dirname+`/dist/OnlineGrimoire/index.html`));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);