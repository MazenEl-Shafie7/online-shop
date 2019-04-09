'use strict';
module.exports = function(app) {
  var ProductAction = require('../controllers/controller');

  // Routes
//    app.route('/login')
//      .get(ProductAction.login());
app.get('/login',ProductAction.login);
app.get('/',ProductAction.home);

//   app.route('/products')
//     .get(ProductAction.listAllProducts)
//     .post(ProductAction.createProduct);


//   app.route('/tasks/:taskId')
//     .get(ProductAction.showProductByID)
//     .put(ProductAction.updateProductByID)
//     .delete(ProductAction.deleteProductByID);
};