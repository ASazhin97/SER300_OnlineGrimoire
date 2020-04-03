
//Install express server
const express = require('express');
const path = require('path');
const {Client} = require('pg');
const mysql = require('mysql');

//SQL CONNECTION
// const connection = mysql.createConnection({
//   host     : 'mysql://bd58119b476c81:6b5a4c66@us-cdbr-iron-east-01.cleardb.net/heroku_4d22adabde189b1?reconnect=true',
//   user     : 'kzvhjayrgjmltg',
//   password : '9069ef59d7db7a5e1ac85fed65c8fda666073a9f5a53b0b286247995a89e3209',
//   database : 'dbs33mbigk7fj5'
// });

// connection.connect();

//postgreSQL Connection
const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: true,
  });
  
  client.connect();
  
  client.query('SELECT table_schema,table_name FROM information_schema.tables;', (err, res) => {
    // if (err) {
    //   console.log("There has been an error connecting to the database");
    // } else {
    //   for (let row of res.rows) {
    //     console.log(JSON.stringify(row));
    //   }
    // }

    try{
      for (let row of res.rows) {
        console.log(JSON.stringify(row));
      }
    } catch (err){
      console.log("There has been an error connecting to the database");
    }

    
    client.end();
  });



const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + `/dist/OnlineGrimoire`));

app.get('*', function(req,res) {
    
res.sendFile(path.join(__dirname+`/dist/OnlineGrimoire/index.html`));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);