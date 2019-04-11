const express = require('express');
const router = express.Router();
const ProductAction = require('../controllers/ProductController');
const UserAction = require('../controllers/UserController');
const auth= require('../middlewares/authenticate');

router.get('/login',UserAction.login);
router.get('/showAllProducts', auth.auth ,ProductAction.showAllProducts);
router.get('/addToCart',auth.auth,ProductAction.addToCart);
module.exports = router;

// module.exports = function(app) {
//   let ProductAction = require('../controllers/ProductController');
//   let UserAction = require('../controllers/UserController');
  
//   // Routes
// //    app.route('/login')
// //      .get(ProductAction.login());
// app.get('/login',UserAction.login);
//app.get('/',ProductAction.home);

//   app.route('/products')
//     .get(ProductAction.listAllProducts)
//     .post(ProductAction.createProduct);


//   app.route('/tasks/:taskId')
//     .get(ProductAction.showProductByID)
//     .put(ProductAction.updateProductByID)
//     .delete(ProductAction.deleteProductByID);

//};