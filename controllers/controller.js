//'use strict';


// var mongoose = require('mongoose'),
//   Product = mongoose.model('ProductSchema'),
//   User= mongoose.model('UserSchema');

  const Product = require('../models/ProductModel');
  const User = require('../models/UserModel');

  exports.login = function(req, res) {
    let userData = User(req.body);
    //let userName=req.body.name;
    userData.save(function(err, user) {
      if (err)
        res.send(err);
      res.json(user);
    });
    console.log("I AM HERE");
    //console.log(userName);
    //console.log(req);
  };
  exports.home = function(req,res){
    console.log("Homeeeee");
    res.send("Homeee");
  };

//   exports.read_a_task = function(req, res) {
//     User.findById(req.params.taskId, function(err, task) {
//       if (err)
//         res.send(err);
//       res.json(task);
//     });
//   };