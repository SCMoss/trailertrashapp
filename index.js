 // Steven Craig Moss: Web



var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var _ = require('lodash');


//Create the app
var app = express();



//Add the middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'));
//(intercepts into every request and provides something unique to the request)



//Connect to MongoDB
mongoose.connect('mongodb://localhost/trailerparkapp');
mongoose.connection.once('open', function() {
    console.log('Listening on port 4000...');
    app.listen(4000)
});
          //run the app in terminal using the syntax node index.js



//CORS support
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

mongoose.connect('mongodb://localhost/trailerparkapp');
mongoose.connection.once('open',function() {



    //load all the models.
    app.models = require('./models/index'); //dependency injection into the controller
    console.log('Listening on port 4000...');
    app.listen(4000);   //this way controllers have access  to all of the models
})

    //Load the routes.
    //
 var routes = require ('./routes');
_.each(routes, function(controller, route) {
      app.use(route, controller(app,route));
});
//the return should be middleware (hopefully)


