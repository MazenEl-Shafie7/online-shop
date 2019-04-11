
const Product = require('../models/ProductModel');
const User = require('../models/UserModel');
const jwt = require('jsonwebtoken');
const config = require('config');
const Window = require('window');
const window = new Window();
const showAllProducts = (req, res, next) => {

  Product.find({}, function (err, products) {
    if (err) {
      console.log("No Product with that ID..");
      next(err);
    }
    else {
      res.send(products);
    }
  })
}
const userDATA = (req) => {
  let token = req.headers['token'];
  var base64Url = token.split('.')[1];
  var decodedValue = JSON.parse(window.atob(base64Url));
  let userID = decodedValue.id;
  User.findById(userID, (err, user) => {
    if (err) {
      console.log("No User with that ID..");
      next(err);
    }
    else {
      console.log("*************");
      console.log(user);

      return user;
    }
  })
}
const addToCart = (req, res, next) => {
  products = req.body;
  let token = req.headers['token'];
  var base64Url = token.split('.')[1];
  var decodedValue = JSON.parse(window.atob(base64Url));
  let userID = decodedValue.id;
  let USER = new User;

  User.findById(userID, (err, user) => {
    let addedProducts=[]
    let notEnoughQuantityProducts=[]
    if (err) {
      console.log("No User with that ID..");
      next(err);
    }
    else {
      USER = user;
      // products.forEach(product => {

      // });
      for (product of products) {
         Product.findById(product.id, (err, p) => {
          if (err) {
            console.log("No Product with that ID");
            next(err);
          }
          else {
            if (p.quantity < product.quantity) {
              console.log("Not enough quantity.." + p.quantity + " .. " + product.quantity);
              //res.send("Not enough quantity.." + p.quantity + " .. " + product.quantity);
              notEnoughQuantityProducts.push(p.name);
            }
            else {
              let newCount=p.quantity - product.quantity;
              console.log(newCount);
              
              p.quantity = product.quantity;
              Product.updateOne({_id: product.id},{ $set: { quantity: newCount } }, (err, result) => {
                console.log("Successfully updated product quantity..");
                            });
              console.log("------------------------");
               User.updateOne({ _id: userID }, { $push: { cart: p } }, (err, result) => {
                //res.send("Successfully added to cart");
                console.log("Successfully added to cart");
                addedProducts.push(p.name);
                console.log(addedProducts);
                            });
              // user.cart.push(p);
              // console.log(user);
              // USER = user;
         }
          }
        })
      }
      // Product.find({
      //   '_id': { $in: products }
      // }, function(err, product1) {
      //   console.log("products---->  " + product1);
      //   //res.send(product1);
      //   user.cart.push(product1);

      // });
      // console.log("//////////////////////////////////USEr.....");
      // console.log(USER);
      // next();
      console.log("Finallyyyyy .....");
      
      res.send("* added to cart products:  " + addedProducts + "\n* not enough quantity procuts:  " + notEnoughQuantityProducts);
    }
  })
  console.log("###########################");
  // let t=userDATA(req);
  // console.log(t);
  // USER.save();
  //res.send(USER);
  // res.send(t);
  //res.send("added to cart products:  " + addedProducts + "\n not enough quantity procuts:  " + notEnoughQuantityProducts);      

}

module.exports = { showAllProducts, addToCart };



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
// for(product of products){
//   Product.findById(product.id,function(err,p){
//     if(err){
//       console.log("No Product with that ID");
//       next(err);
//     }
//     else{
//       if(p.quantity < product.quantity){
//         console.log("Not enough quantity.." + p.quantity +" .. " + product.quantity);
//       }
//       else{
//           p.quantity=product.quantity;
//           console.log("------------------------");
//           user.cart.push(p);
//           console.log(user);


//       }
//     }
//   })
// }