const pool = require('../database');
const bcrypt = require('bcrypt');
const saltRounds = 10;


exports.view_accounts = function (req, res) {
    //todo: error handling
    pool.query('SELECT * FROM account', function (err, rows) {
        if (err) {
            res.status(400).json(err);
        }
        else {
            res.status(200).json(rows);
        }
    });
};

exports.view_account = function (req, res) {
    //todo: error handling
    pool.query("SELECT account.username, account.password, account.email, account.registered_on, account.last_online FROM `account` WHERE account.username = ?", [req.params.id], function (err, row) {
        if (err) {
            res.status(400).json({ error: err });
        } else if (row.length == 0) {
            res.status(404).json({ error: "User not found" });
        } else {
            res.status(200).json(row[0]);
        }
    });
};

//TODO
exports.edit_account = function (req, res) {
};
exports.add_account = function (req, res) {
    const sql = "INSERT INTO account (username, password, email) VALUES  (?,?,?)";
    var password = req.body.password;
    var hashedPassword = "";
    bcrypt.genSalt(saltRounds, function (err, salt) {
        bcrypt.hash(password, salt, function (err, hash) {
            let account = {};
            pool.query(sql, [req.body.username, hash, req.body.email], function (err, row) {
                if (err) {
                    res.status(409).json({ error: err.code });
                } else {
                    res.status(201).json(req.body.username);
                }
            });
        })
    });
    console.log(hashedPassword);


};
