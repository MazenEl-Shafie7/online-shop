const Product = require('../models/ProductModel');
const User = require('../models/UserModel');
const jwt = require('jsonwebtoken');
const config=require('config');
const Window = require('window'); 
const window = new Window();
const auth=(req,res,next) => {
 
      let token = req.body.token;
      var base64Url = token.split('.')[1];
      var decodedValue = JSON.parse(window.atob(base64Url));
      console.log(decodedValue);
      let userID=decodedValue._id;
      User.findById(userID,(err,user) => {
        if(err){ 
                console.log("No User with that ID..");
                next(err);  
              }
        else {
            next();
            }
      })

    }
  


module.exports ={auth};