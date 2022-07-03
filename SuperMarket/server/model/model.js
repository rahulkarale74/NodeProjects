const mongoose = require('mongoose');

var prodschema = new mongoose.Schema({
  Id: {
    type: String,
    required: true,
    unique: true,
  },
  Name: {
    type: String,
    required: true,
  },
  Cost: Number,
  Description: String,
});

module.exports = mongoose.model('proddb', prodschema);
