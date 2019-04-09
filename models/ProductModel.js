'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the product'
  },
  price: {
    type: Number
  },
  currency: {
    type: String
  },
  cateogiry: {
    type: String
  },
  vendor: {
    type: String
  },
  publisher: {
    type: String
  },
  quantity: {
    type: Number

  },
  description: {
    type: String
  }
});



module.exports = mongoose.model('Product', ProductSchema);

