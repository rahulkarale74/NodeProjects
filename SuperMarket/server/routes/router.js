const express = require('express');
const router = express.Router();

// Retrieve all users
router.get('/getAll', async (req, res) => {
  try {
    const proddb = await proddb.find();
    res.json(proddb);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create a new user
//router.post('/', prodController.create);

// Retrieve a single user with id
//router.get('/:id', userController.findOne);

// Update a user with id
//router.put('/:id', userController.update);

// Delete a user with id
//router.delete('/:id', userController.delete);

module.exports = router;
