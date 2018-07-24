const pool = require('../database');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const config = require('../config');
const token = require('../routes/jwtHandler');

exports.view_own_playerstats = function (req, res) {
    pool.query('SELECT p.*, a.daily_gift FROM player_stats p INNER JOIN account a ON p.username = a.username WHERE p.username = ?',[req.username], function (err, rows) {
        if (err) {
            res.status(400).json(err);
        }
        else {
            res.status(200).json(rows);
        }
    });
};

exports.view_rankings_for_level = function (req, res) {
    pool.query("SELECT a.username, a.last_online, p.`level` FROM account a INNER JOIN player_stats p ON a.username = p.username ORDER BY p.level DESC LIMIT 50", function (err, row) {
        if (err) {
            res.status(400).json({ error: err });
        } else if (row.length == 0) {
            res.status(404).json({ error: "No users found." });
        } else {
            res.status(200).json(row);
        }
    });
}

exports.view_rankings_for_gold = function (req, res) {
    pool.query("SELECT a.username, a.last_online, p.`gold`, p.`level` FROM account a INNER JOIN player_stats p ON a.username = p.username ORDER BY p.gold DESC LIMIT 50", function (err, row) {
        if (err) {
            res.status(400).json({ error: err });
        } else if (row.length == 0) {
            res.status(404).json({ error: "No users found." });
        } else {
            res.status(200).json(row);
        }
    });
}

exports.view_rankings_for_rubies = function (req, res) {
    pool.query("SELECT a.username, a.last_online, p.`rubies`, p.`level` FROM account a INNER JOIN player_stats p ON a.username = p.username ORDER BY p.rubies DESC LIMIT 50", function (err, row) {
        if (err) {
            res.status(400).json({ error: err });
        } else if (row.length == 0) {
            res.status(404).json({ error: "No users found." });
        } else {
            res.status(200).json(row);
        }
    });
}