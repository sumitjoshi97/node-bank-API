const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// schema for bank-user details
var BankSchema = new Schema({
	'ac_no': {
		type: String,
		required: true,
		unique: true
	},
	'password': {
		type: String,
		maxlength: 55
	},
	'name': {
		type: String,
		required: true 
	}
})

// exporting bank Scema to model
var Bank = module.exports = mongoose.model('Bank', BankSchema);

// get bank details
module.exports.getBankDetails = (ac, pass, callback) => {
	let query = {"ac_no": ac,"password": pass };
	Bank.findOne(query, callback);
}

//update credentials 
module.exports.updateBankDetails = (ac, details, callback) => {
	var query = {'ac_no': ac};

	var update = {
		password: details.password,
		name: details.name
	}

	Bank.findOneAndUpdate(query, update, callback);
}