const express = require('express');
const router = express.Router();

// Controller
const usersController = require('../controllers/users');

// Route methods
router.get('/users', usersController.getUsers);
router.post('/users', usersController.postUser);

module.exports = router;