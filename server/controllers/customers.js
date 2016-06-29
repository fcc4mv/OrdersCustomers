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
				}
			})
		},

		create: function(req, res) {
			var Cust = new Customer({
				name: req.body.name,
			});
			Cust.save(function(err, results){
				if(err){
					console.log(err);
				} else {
					res.json(results);
				}
			})
		},

		delete: function(req, res) {
			console.log("during deletion", req.params.id);
			Customer.remove({_id: req.params.id}, function(err, results){
				if(err){
					console.log("didn't delete, because of this error: ", err);
				} else {
					console.log('successfully deleted');
					res.json(results);
				}
			})
		}
	}
}) ();