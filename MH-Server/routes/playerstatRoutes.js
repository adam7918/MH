const router = require('express').Router(); // Load router
const playerstat_controller = require('../controllers/playerstatController');// Load controller
// const auth = require('../controllers/authController');
var VerifyToken = require('./jwtHandler') 

// Route all paths to right controller
router.get('/', VerifyToken, playerstat_controller.view_own_playerstats);
router.get('/ranking/level', playerstat_controller.view_rankings_for_level);
router.get('/ranking/gold', playerstat_controller.view_rankings_for_gold);
router.get('/ranking/ruby', playerstat_controller.view_rankings_for_rubies);

module.exports = router;