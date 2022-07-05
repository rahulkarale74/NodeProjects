const mongoose = require('mongoose');

var prodschema = new mongoose.Schema({
  Id: {
    type: String,
    unique: true,
  },
  Name: {
    type: String,
  },
  Cost: Number,
  Description: String,
});

module.exports = mongoose.model('proddb', prodschema);
