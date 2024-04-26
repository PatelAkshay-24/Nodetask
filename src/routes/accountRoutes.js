const express = require('express');
const router = express.Router();
const AccountController = require('../controllers/AccountController');

router.post('/:userId/accounts', AccountController.createAccount);

router.get('/:userId/accounts', AccountController.getUserAccounts);
module.exports = router;
