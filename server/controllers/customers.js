	// First add the following two lines at the top of the friends controller
	// so that we can access our model through var Friend
	// need to require mongoose to be able to run mongoose.model()
var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');

	// this is our friends.js file located at /server/controllers/friends.js
	// note the immediate function and the object that is returned
module.exports = (function() {
	return {
		// notice how index in the factory(client side) is calling the index method(server side)
		index: function(req, res) {
			Customer.find({}, function(err, results){
				if(err) {
					console.log(err);
				} else {
					res.json(results);
					console.log("display in customers.js")
				}
			})
		},

		create: function(req, res, name) {
			var Cust = new Customer({
				name: req.body.name
			});
			Cust.save(function(err){
				if(err){
					console.log("db error!");
				} else {
					Customer.find({}, function(err, customers){
						if(err){
							console.log('error!! from db!!');
						} else {
							
							console.log("saved in db")
							res.json(customers);
						}
					})

				}
			})
		},

		delete: function(req, res ) {
			console.log("during deletion", req.params.id);
			Customer.remove({_id: req.params.id}, function(err){
				if(err){
					console.log('could not find id to delete');
				} else {
					res.end();
					console.log('deleted')
					}				
			})
		}
	}
}) ();