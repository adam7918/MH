// Load dependencies 
const express = require('express');  // JSON Parser
const app = express();                      // Express framework 
const bodyParser = require('body-parser');  // JSON Parser
const helmet = require('helmet');           // Protection against well known vulnerabilities
const colors = require('colors');   // Colors (console output) 
const cors = require('cors');       // Needed for front-end accessibility to the database 
const config = require('./config'); // Global configuration file
const db = require('./database');   // Database file
// Adam

loadModules();
app.listen(config.app_port);
console.log("--- Server started on: "+ new Date().toLocaleString() +" ---" .green.bold);

module.exports = app;
function loadModules() {
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.set('private_key',"PRIVATE");
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
