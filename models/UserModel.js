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
    },
    cart:{
      type: Array
    }
  });
module.exports = mongoose.model('User', UserSchema, 'users');
