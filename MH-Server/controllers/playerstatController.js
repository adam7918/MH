const pool = require('../database');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const config = require('../config');
const token = require('../routes/jwtHandler');

exports.view_playerstats_by_id = function (req, res) {
    pool.query('SELECT * FROM player_stats WHERE username = `as`', function (err, rows) {
        if (err) {
            res.status(400).json(err);
        }
        else {
            res.status(200).json(rows);
        }
    });
};