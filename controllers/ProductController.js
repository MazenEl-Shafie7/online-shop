//'use strict';


// var mongoose = require('mongoose'),
//   Product = mongoose.model('ProductSchema'),
//   User= mongoose.model('UserSchema');

const Product = require('../models/ProductModel');
const User = require('../models/UserModel');
const jwt = require('jsonwebtoken');
const config=require('config');
const Window = require('window'); 
const window = new Window();
const showAllProducts=(req,res,next) => {
    
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