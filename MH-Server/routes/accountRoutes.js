const router = require('express').Router(); // Load router
const account_controller = require('../controllers/accountController');// Load controller
// const auth = require('../controllers/authController');
const token = require('./routes/jwtHandler');// Load controller


// Route all paths to right controller
router.get('/', token.authenticate(), account_controller.view_accounts);
router.get('/:id', token.authenticate(), account_controller.view_account);
router.post('/', account_controller.add_account);
router.put('/edit/:username/', token.authenticate(), account_controller.edit_account);
router.post('/login/', account_controller.login)
router.get('/online/all', token.authenticate(), account_controller.get_count_users_online);
router.put('/online/', token.authenticate(), account_controller.update_last_online);

module.exports = router;