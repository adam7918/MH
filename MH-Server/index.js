// Load dependencies 
const express = require('express');  // JSON Parser
const app = express();                      // Express framework 
const bodyParser = require('body-parser');  // JSON Parser
const helmet = require('helmet');           // Protection against well known vulnerabilities
const colors = require('colors');   // Colors (console output) 
const cors = require('cors');       // Needed for front-end accessibility to the database 
const logger = require('morgan');   // Morgan (logging) 
const config = require('./config'); // Global configuration file
const db = require('./database');   // Database file
// require('appmetrics-dash').monitor();
var RateLimit = require('express-rate-limit');

var limiter = new RateLimit({
  windowMs: 15*60*1000, // 15 minutes
  max: 3000, // limit each IP to 100 requests per windowMs
  delayMs: 0, // disable delaying - full speed until the max limit is reached
});

loadModules();
var server = app.listen(config.app_port, function (){
    console.log(("--- Server started on: "+ new Date().toLocaleString() +" ---").green.bold);
  });

/* SOCKET.IO BEGIN */
const io = require('socket.io')(server);
var connectedClients = [];
var chatMessageHistory = [];

// ON SOCKET.IO CONNECTION
io.on('connection', function(socket) {
    io.emit('ONLINE_COUNT', connectedClients.length)
    io.emit('CHAT_HISTORY', chatMessageHistory)

    // ON LOGIN
    socket.on('USER_LOGIN', function(data){
        var alreadyOnline = false
        for(var i=0; i < connectedClients.length; i++) { 
            if(connectedClients[i]._username == data) return alreadyOnline = true; 
        }

        // EMIT ONLINE USER COUNT
        if(!alreadyOnline){
            socket._username = data
            connectedClients.push(socket)
            io.emit('ONLINE_COUNT', connectedClients.length)
        }
    });

    // ON +SEND_MESSAGE RECEIVED
    socket.on('SEND_MESSAGE', function(data) {
        chatMessageHistory.push(data)
        // EMIT THE MESSAGE RECEIVED
        io.emit('MESSAGE', data)
    });

    // ON CLIENT ROUTE CHANGE
    socket.on('ROUTE_CHANGE', function(data) {
        io.emit('ONLINE_COUNT', connectedClients.length);
    });

    // ON SOCKET.IO RECONNECT
    socket.on('reconnect', function() {
       var alreadyOnline = false
       for(var i=0; i < connectedClients.length; i++) { 
           if(connectedClients[i]._username == socket._username) return alreadyOnline = true; 
       }

       // EMIT ONLINE USER COUNT
       if(!alreadyOnline){
           connectedClients.push(socket)
           io.emit('ONLINE_COUNT', connectedClients.length)
       }
    });

    // ON SOCKET.IO DISCONNECTION
    socket.on('disconnect', function() {
        var i = connectedClients.indexOf(socket);
        connectedClients.splice(i, 1);
        io.emit('ONLINE_COUNT', connectedClients.length);
    });
});

/* SOCKET.IO END */

module.exports = app;
function loadModules() {
    app.use(limiter);
    app.use(logger('dev'));
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.set('private-key',"00112244aa");
    app.use(bodyParser.json());     // body parser
    app.use(require('./routes'));   // Load routes
    app.use(cors());   // Allow access to the front-end
    app.options('*', cors()); // include before other routes
    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", config.host);
        res.setHeader('Access-Control-Allow-Methods', 'OPTIONS,GET,PUT,POST,DELETE');
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });
    app.use(helmet());
}
