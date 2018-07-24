const router = require('express').Router(); // Load router
const account_controller = require('../controllers/accountController');// Load controller
// const auth = require('../controllers/authController');
var VerifyToken = require('./jwtHandler') 

// Route all paths to right controller
router.get('/', VerifyToken, account_controller.view_accounts);
router.get('/registered/', account_controller.get_count_users_all);
router.get('/:id', VerifyToken, account_controller.view_account);
router.post('/', account_controller.add_account);
router.put('/edit/:username/', VerifyToken, account_controller.edit_account);
router.post('/login/', account_controller.login);
router.get('/online/all', account_controller.get_count_users_online);
router.get('/online/all/detailed', VerifyToken, account_controller.get_details_users_online);
router.put('/online/', VerifyToken, account_controller.update_last_online);

module.exports = router;