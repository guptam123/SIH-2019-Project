var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

var AdminSchema = mongoose.Schema({
	companyname: {
		type: String
	},
	email: {
		type: String
	},
	password: {
		type: String
	}
});

var Admin = module.exports = mongoose.model('Admin', AdminSchema);

module.exports.getUserById = function(id, callback){
	Admin.findById(id, callback);
}

module.exports.getUserByEmail = function(email, callback){
	var query = {email: email};
	Admin.findOne(query, callback);
}

module.exports.comparePassword = function(candidatePassword, hash, callback){
	bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
    	callback(null, isMatch);
	});
}