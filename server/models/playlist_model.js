var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var PlaylistSchema = new mongoose.Schema({
	_user: {type: Schema.ObjectId, ref: 'User'},
	_genre: {type: Schema.ObjectId, ref: 'Genre'},
	genre_name: String,
	user_name: String,
	description: String,
	playlist_name: String,
	source: String,
	link: String,
	likes: [],
	favorite_genre: String,
	likes_count: Number})


var GenreSchema = new mongoose.Schema({
	playlists: [{type: Schema.Types.ObjectId, ref: 'Playlist'}],
	genre_name: String})

var UserSchema = new mongoose.Schema({
	name: String,
	email: String,
	password: String,
	likes: [PlaylistSchema],
	uploads: [{type: Schema.Types.ObjectId, ref: 'Playlist'}],
	likes_received: Number})
mongoose.model('Playlist', PlaylistSchema);
mongoose.model('User', UserSchema);
mongoose.model('Genre', GenreSchema);

