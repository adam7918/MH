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
require('appmetrics-dash').monitor();
var RateLimit = require('express-rate-limit');
  
app.enable('trust proxy');
var limiter = new RateLimit({
  windowMs: 15*60*1000, // 15 minutes
  max: 10, // limit each IP to 100 requests per windowMs
  delayMs: 0, // disable delaying - full speed until the max limit is reached
  handler: function(res, req){
          res.status(429).end("Too many requests.");
  }
});

loadModules();
var server = app.listen(config.app_port, function (){
    console.log(("--- Server started on: "+ new Date().toLocaleString() +" ---").green.bold);
  });

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
