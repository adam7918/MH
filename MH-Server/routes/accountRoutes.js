const router = require('express').Router(); // Load router
const account_controller = require('../controllers/accountController');// Load controller
// const auth = require('../controllers/authController');

// Route all paths to right controller
router.get('/', account_controller.view_accounts);
router.get('/:id', account_controller.view_account);
router.post('/', account_controller.add_account);
router.put('/edit/:username/', account_controller.edit_account);
router.post('/login/', account_controller.login)

module.exports = router;