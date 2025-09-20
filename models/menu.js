const mongoose = require('mongoose');

const menuschema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    is_drink: {
      type: Boolean,
      required: true
    },
    ingredients: {
      type: [String], // array of strings
      default: []
    },
    number_of_sales: {
      type: Number,
      default: 0
    }
  }
);

const menu = mongoose.model('menu', menuschema);
module.exports = menu;
