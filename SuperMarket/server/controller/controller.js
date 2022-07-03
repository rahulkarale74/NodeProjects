const proddb = require('../model/model.js');

// Retrieve and return all users from the database.
exports.findAll = (req, res) => {
  proddb
    .find()
    .then((products) => {
      res.send(products);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Something went wrong while getting list of products.',
      });
    });
};

// Create and Save a new User
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    return res.status(400).send({
      message: 'Please fill all required field',
    });
  }

  // Create a new User
  const proddb = new proddb({
    Id: req.body.Id,
    Name: req.body.Name,
    Cost: req.body.Cost,
    Description: req.body.Description,
  });

  // Save user in the database
  proddb
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Something went wrong while creating new user.',
      });
    });
};
