var express = require('express');
const sqlite3 = require('sqlite3').verbose();

var loginRoute = require('./routes/login.js');
var dashboardRoute = require('./routes/dashboard.js');
var bodyParser = require('body-parser'); 

var port = process.env.PORT || 3000;

var app = express();

app.use(bodyParser.json()); // to support JSON bodies
app.use(bodyParser.urlencoded({ extended: true })); 

let db = new sqlite3.Database('./db/manufacturingData.db', (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Connected to the manufacturingData database.');
  });

// ================================================================
// setup our express application
// ================================================================
app.use('/public', express.static(process.cwd() + '/public'));
app.set('view engine', 'ejs');


// ================================================================
// setup routes
// ================================================================
app.use(loginRoute);

app.use('/dashboard',dashboardRoute);
// ================================================================
// start our server
// ================================================================
app.listen(port, function() {
    console.log('Server listening on port ' + port + '...');
});