const express = require('express');
const router = express.Router();
const prodController = require('../controller/controller');

// Retrieve all users
router.get('/', prodController.findAll);

// Create a new user
router.post('/', prodController.create);

// Retrieve a single user with id
//router.get('/:id', userController.findOne);

// Update a user with id
//router.put('/:id', userController.update);

// Delete a user with id
//router.delete('/:id', userController.delete);

module.exports = router;
