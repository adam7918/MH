// Configuration file
let config = {};

// Production flag => Set on 'false' to disable all kind of verbose logging.
config.debug = true;

// Application settings
config.token_secret = "TH8MksG2L5u3AJjn7Z4r2WdZntLBNe4y";
config.not_allowed = /[!@#$%^&*+\\[\]{};':"\\|,.<>\/?]/;
config.default_rows_per_page = 50;
config.max_rows_per_page = 100;

// Host settings
config.app_port = 3000;
config.host = "localhost";
config.url_prefix = "";

// localhost connection
// config.db_name = "ims";
// config.db_host = "localhost";
// config.db_user = "root";
// config.db_pass = "";


// Database connection
config.db_name = "medievalhavoc";
config.db_host = "localhost";
config.db_user = "root";
config.db_pass = "troll123";


module.exports = config;