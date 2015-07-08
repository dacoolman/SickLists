var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserSchema = new mongoose.Schema({
	name: String,
	email: String,
	password: String,
	likes: [],
	uploads: [],
	likes_received: Number})
mongoose.model('User', UserSchema);