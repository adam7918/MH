const pool = require('../database');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const config = require('../config');


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
            res.status(404).json({ error: "User not found." });
        } else {
            res.status(200).json(row[0]);
        }
    });
};

//TODO
exports.edit_account = function (req, res) {
};

exports.add_account = function (req, res) {
    // Get connection
    pool.getConnection(function (err, connection) {
        // Begin transaction
        connection.beginTransaction(function (err) {
            // Throw error if error beginning transaction
            if (err) throw err;

            // ADD ACCOUNT BLOCK
            const query1 = "INSERT INTO account (username, password, email) VALUES  (?,?,?)";
            var password = req.body.password;
            bcrypt.genSalt(saltRounds, function (err, salt) {
                bcrypt.hash(password, salt, function (err, hash) {
                    console.log('ADD ACCOUNT BLOCK')
                    connection.query(query1, [req.body.username, hash, req.body.email], function (err, row) {
                        if (err) {
                            return connection.rollback(function () {
                                res.status(400).json({ error: err.code });
                            })
                        } else { 
                            // ADD PLAYER STATS BLOCK
                            const query2 = "INSERT INTO player_stats (username, level, experience, gold, health, energy) VALUES  (?, 1, 0, 0, 100, 5)";
                            connection.query(query2, req.body.username, function (err, row) {

                                if (err) {
                                    return connection.rollback(function () {
                                        res.status(400).json({ error: err.code });
                                    })
                                }
                            });

                            // ADD NEW STUFF HERE
                        }
                    });
                })
            });


            // Commit transaction
            connection.commit(function (err) {
                console.log('COMMIT BLOCK')
                if (err) {
                    console.log(err);
                    return connection.rollback();
                }
                res.status(201).json({success:'Account Created'});     // return response of newly added item
                connection.release();    // release connection back to pool
            });
        })
    })
};

exports.login = function (req, res) {
    const errors = ''
    if (errors.length)
        res.status(400).json({ errors: errors });
    else {
        var password = req.body.password;
        bcrypt.genSalt(saltRounds, function (err, salt) {
            bcrypt.hash(password, salt, function (err, hash) {
                pool.query('SELECT password, username FROM account WHERE username = ?', [req.body.username], function (err, rows) {
                    if (rows.length === 0) {
                        res.status(400).json({ error: "Incorrect username or password" });
                    } else {
                        bcrypt.compare(password, rows[0].password, function (err, compRes) {
                            // res == true
                            if (compRes === true) {
                                const token = jwt.sign({username: rows[0].username}, config.token_secret, {/*expiresIn: 300*/});
                                res.status(200).json({token: token});
                            }
                            else {
                                res.status(400).json({ error: "Incorrect username or password" });
                            }
                        });
                    }
                });
            })
        });

    }
};

