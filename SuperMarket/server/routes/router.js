const express = require('express');
const router = express.Router();
const Products = require('../model/model.js');

// Retrieve all users
router.get('/getAll', async (req, res) => {
  try {
    const prd1 = await Products.find();
    res.json(prd1);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Post Method
router.post('/post', async (req, res) => {
  const prd2 = new Products({
    Id: req.body.Id,
    Name: req.body.Name,
    Cost: req.body.Cost,
    Description: req.body.Description,
  });

  try {
    const crtprod = await prd2.save();
    res.status(200).json(crtprod);
  } catch (error) {
    res.status(400).json({ message: error.message });
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
