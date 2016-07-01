// First add the following two lines at the top of the friends controller
// so that we can access our model through var Friend
// need to require mongoose to be able to run mongoose.model()
var mongoose = require('mongoose');
var Order = mongoose.model('Order');

// this is our friends.js file located at /server/controllers/friends.js
// note the immediate function and the object that is returned
module.exports = (function() {
return {
	// notice how index in the factory(client side) is calling the index method(server side)
	index: function(req, res) {
		Order.find({}, function(err, results){
			if(err) {
				console.log(err);
			} else {
				res.json(results);
				console.log("display in orders.js")
			}
		})
	},

	create: function(req, res) {
		var Or = new Order(req.body)
		Or.save(function(err){
			if(err){
				console.log("db error!")
			} else {
				Order.find({}, function(err, orders){
					if(err){
						console.log("error!! from Db!")
					}else {
						console.log("saved in db!")
						res.json(orders);
				}
			})
		}
	})
}
}
})();
//
// 	delete: function(req, res) {
// 		console.log("during deletion", req.params.id);
// 		Order.remove({_id: req.params.id}, function(err){
// 			if(err){
// 				console.log("didn't delete, because of this error: ");
// 			} else {
// 				res.end();
// 				console.log('successfully deleted');
// 			}
// 		})
// 	}
// }
// }) ();
