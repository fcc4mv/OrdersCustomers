	// First, at the top of your routes.js file you'll have to require the controller
var customers = require('./../controllers/customers.js');
var orders = require('./../controllers/orders.js');
	// This is our routes.js file located in server/config/routes.js
	// This is where we will define all of our routing rules!
	// We will have to require this in the server.js file (and pass it app!)
module.exports = function(app) {
	// verb: get, plural of target as the URI is the RESTful index method (it returns all friends)
	app.get('/show', function(req, res) {
		customers.index(req, res);
	});

	app.post('/orders', function(req, res){
		console.log("in /orders route", req.body);
		orders.create(req, res);
	})
	app.get('/orders', function(req, res){
		console.log("in /orders route");
		orders.index(req, res);
	})

	app.post('/new', function(req, res){
		console.log("in /new route", req.body);
			// BRENDAN -- why this req.params.name/what does this mean?
			// Also, why is this a 'get' and not a 'post'?
		customers.create(req, res);
	});

	app.get('/remove/:id', function(req, res){
		customers.delete(req, res);
	})
};
