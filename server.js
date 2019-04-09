
var express = require('express'),
  app = express(),
  port = process.env.PORT || 4000,
  mongoose = require('mongoose'),
  Product = require('./models/ProductModel'), //created model loading here
  User= require('./models/UserModel'),
  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://localhost:27017'); 

mongoose.connect('mongodb://localhost:27017/IBM',
    { 
        useNewUrlParser: true , 
        useCreateIndex: true
    });


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json);

var routes = require('./routes/routes'); //importing route
routes(app); //register the route

//app.listen(port);
app.listen(port, function(){ console.log('Node server listening on port ' + port);});


//console.log('Node IBM Task RESTful API server started on: ' + port);
