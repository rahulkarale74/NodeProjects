const express = require('express');
const router = express.Router();
const Products = require('../model/model.js');

// Retrieve all Products
router.get('/getproducts', async (req, res) => {
  try {
    const prd1 = await Products.find();
    res.json(prd1);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Create Products
router.post('/createproducts', async (req, res) => {
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

//Update Products
router.patch('/updateproducts/:Id', async (req, res) => {
  try {
    const id = req.params.Id;
    const updatedData = req.body;
    const options = { new: true };

    const result = await Products.findByIdAndUpdate(id, updatedData, options);

    res.send(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Delete Products
router.delete('/deleteproducts/:Id', async (req, res) => {
  try {
    const id = req.params.Id;
    const prod4 = await Products.findByIdAndDelete(id);
    res.send('Item with ${prod4.name} has been deleted..');
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
