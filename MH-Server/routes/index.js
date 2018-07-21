const router = require('express').Router(); // Load router
const prefix = '/api';
const cors = require('cors');

// Route all paths to right routers

router.use('/account', cors(), require("./accountRoutes"));
router.use('/playerstat', cors(), require("./playerstatRoutes"))

// todo: Custom 404 page etc

module.exports = router;