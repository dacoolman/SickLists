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
mongoose.model('Playlist', PlaylistSchema);

var GenreSchema = new mongoose.Schema({
	playlists: [{type: Schema.Types.ObjectId, ref: 'Playlist'}],
	genre_name: String})
mongoose.model('Genre', GenreSchema);

