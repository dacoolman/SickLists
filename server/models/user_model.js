var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserSchema = new mongoose.Schema({
	name: String,
	email: String,
	password: String,
	likes: [{type: Schema.Types.ObjectId, ref: 'Playlist'}],
	uploads: [{type: Schema.Types.ObjectId, ref: 'Playlist'}],
	likes_received: Number})
mongoose.model('User', UserSchema);