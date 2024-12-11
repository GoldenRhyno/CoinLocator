var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var sqlite = require('sqlite3');
const cors = require('cors');
const http = require('http');
const path = require('path');
var port = process.env.PORT || 8080;


// routes
var botRoute = require('./routes/bots');
var settingRoute = require('./routes/setting');
var transactionRoute = require('./routes/transactions');
var tokenRoute = require('./routes/token');

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(express.static(path.join(__dirname, '../build/')));

app.use(cors());

// register routes
app.use('/setting', settingRoute);
app.use('/bots', botRoute);
app.use('/transactions', transactionRoute);
app.use('/tokens', tokenRoute);

// index path
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../build/index.html'));
});

const server = http.createServer(app);

server.listen(port, function () {
  console.log('app listening on port: ' + port);
});


module.exports = app;
global.snipSubscription = null;
global.frontSubscription = null;
global.wsClients = {};

module.exports = app;
