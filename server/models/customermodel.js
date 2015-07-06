var mongoose = require('mongoose');
var CustomerSchema = new mongoose.Schema({name: String,
	date: String})
mongoose.model('Customer', CustomerSchema);	
var OrderSchema = new mongoose.Schema({customer: String,
	quantity: String,
product: String,
date: String})
mongoose.model('Order', OrderSchema);

var QuestionSchema = new mongoose.Schema({question: String,
	description: String,
	user: String,
	date: Number,
	answers: []})

mongoose.model('Question', QuestionSchema);





