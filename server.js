
const express = require('express');
const  app = express();
const  port = process.env.PORT || 3000;
const  mongoose = require('mongoose');
const  Product = require('./models/ProductModel');//created model loading here
const  User= require('./models/UserModel');
const  bodyParser = require('body-parser');
const routes = require('./routes/routes'); //importing route


const config=require('config');

  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://localhost:27017'); 

mongoose.connect('mongodb://localhost:27017/IBM',
    { 
        useNewUrlParser: true , 
        useCreateIndex: true
    }).then(() => console.log("Connected to MongoDB"))
    .catch(() => console.log("Error! cannot connect to MongoDB"));

if (!config.get('jwtPrivateKey')){
  console.log("ERROR !!! jwtPrivateKey is not defined");
  process.exit(1);
}
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(express.json());

//routes(app); //register the route
app.use('/api',routes);
 
// app.get('/', function(req, res){
//   res.json({"tutorial" : "Build REST API with node.js"});
//  });

//app.listen(port);
// Product.find({},function(err,products){
//   console.log(products);
// })
app.listen(port, function(){ console.log('Node server listening on port ' + port);});


//console.log('Node IBM Task RESTful API server started on: ' + port);
