const config = require('./config');   // Global oonfiguration file
const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 100, // Important
    host: config.db_host,
    user: config.db_user,
    password: config.db_pass,
    database: config.db_name,
    debug: false
});


checkConnection();

// Check if connection is successful
function checkConnection() {
    pool.query("SELECT 1", function (err, result) {
        if (err) {
            console.error("        - Database error occurred:");
            console.error("            -> " + err.code);
            process.exit(1);
        } else {
            console.log("        - Database connection established ".bold);
        }
    })
}

module.exports = pool;