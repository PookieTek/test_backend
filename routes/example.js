const express = require('express');
const router = express.Router();
const exampleController = require('../controllers/example');
const auth = require('../middleware/auth');

router.post('/example', auth, exampleController.function);
module.exports = router;