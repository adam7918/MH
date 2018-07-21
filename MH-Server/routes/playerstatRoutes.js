const router = require('express').Router(); // Load router
const playerstat_controller = require('../controllers/playerstatController');// Load controller
// const auth = require('../controllers/authController');
var VerifyToken = require('./jwtHandler') 

// Route all paths to right controller
router.get('/:id', playerstat_controller.view_playerstats_by_id);

module.exports = router;