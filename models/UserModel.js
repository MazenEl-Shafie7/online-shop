'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserSchema = new mongoose.Schema({
    name: {
      type: String,
      required: 'Kindly enter the name of the user'
    },
    password: {
      type: String
    },
    token: {
        type: String
    }
  });
module.exports = mongoose.model('User', UserSchema);
