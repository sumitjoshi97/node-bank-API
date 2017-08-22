// init express
const express =  require('express');
const app = express();

// adding body parser
const bodyParser = require('body-parser');

// adding mongoose and connect to database
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/bankStore');

var db = mongoose.connection;

// setting port 
const port = process.env.PORT || 3000;

// middleware
app.use(bodyParser.json());

var Bank = require('./models/bank');

// get bank details for one
app.get('/api/bank/:_id', (req, res) => {
	let ac = req.params._id;
	let cred = ac.split('+');
	//console.log(cred[0] + typeof(cred[0]) + " " + cred[1] + typeof(cred[1]));
	//console.log(Bank.find());
	Bank.getBankDetails(cred[0],cred[1], (err, user) => {
		if(err)
			throw err;
		console.log(user)
		res.send(user);
	}) 
})

app.listen(port, () => {
	console.log('running at 3000')
})