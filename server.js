
//Install express server
const express = require('express');
const path = require('path');
const {Client} = require('pg');
// const mysql = require('mysql');

//SQL CONNECTION
// const connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'perfusionist',
//   password : 'shokugeki',
//   database : 'perfusion_sim'
// });

//postgreSQL Connection
const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: true,
  });
  
  client.connect();
  
  client.query('SELECT table_schema,table_name FROM information_schema.tables;', (err, res) => {
    if (err) throw err;
    for (let row of res.rows) {
      console.log(JSON.stringify(row));
    }
    client.end();
  });

// connection.connect();

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + `/dist/OnlineGrimoire`));

app.get('*', function(req,res) {
    
res.sendFile(path.join(__dirname+`/dist/OnlineGrimoire/index.html`));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);