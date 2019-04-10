//'use strict';


// var mongoose = require('mongoose'),
//   Product = mongoose.model('ProductSchema'),
//   User= mongoose.model('UserSchema');

  const Product = require('../models/ProductModel');
  const User = require('../models/UserModel');
  const jwt = require('jsonwebtoken');
  const config=require('config');
  const showAllProducts=(req,res,next) => {
      if (err) {
        next(err);
        }
      else {
        let token = req.body.token;
        var base64Url = token.split('.')[1];
        var decodedValue = JSON.parse(window.atob(base64Url));
        Console.log(decodedValue);
        let userID=decodedValue._id;
        User.findById(userID,(err,user) => {
          if(err){ 
                  console.log("No User with that ID..");
                  next(err);  
                }
          else {
            Product.find({},function(err,products){
              if(err){
                  console.log("No User with that ID..");
                  next(err);  
              }
              else{
              res.send(products);
              }
            })

              }
        })

      }
    }
  
  
  module.exports ={showAllProducts};



  // exports.home = function(req,res){
  //   console.log("Homeeeee");
  //   res.send("Homeee");
  // };

//   exports.read_a_task = function(req, res) {
//     User.findById(req.params.taskId, function(err, task) {
//       if (err)
//         res.send(err);
//       res.json(task);
//     });
//   };