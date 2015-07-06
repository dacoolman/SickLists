var mongoose= require('mongoose');
var User = mongoose.model('User');
var Playlist = mongoose.model('Playlist');
var Genre = mongoose.model('Genre');

var playlistsController = {}

playlistsController.add_genre = function(req, res){
var genre = new Genre({user_name: req.body.user_name, genre_name: req.body.genre_name })
	genre.save(function(err,data){
	if(err){
		console.log('somethign went wrong')
	}
	else{
		console.log(data);
		res.json(data);
	}
})
}

playlistsController.add_playlist = function(req, res){
Genre.findOne({_id: req.params.id}, function(err, the_genre){
if (err)
	{console.log(err);
		res.end();}
var playlist = new Playlist({user_name: req.body.user_name, genre_name: req.body.genre_name, playlist_name: req.body.playlist_name,
 source: req.body.source, link: req.body.link, likes_count: 0  })
playlist._genre = the_genre._id;
playlist._user = req.body.user_id
the_genre.playlists.push(playlist);
playlist.save(function(err){

		the_genre.save(function(err,data){
	if(err){
		console.log('somethign went wrong')
	}
	else{
		console.log(data);
		res.json(data);
	}
})

})


})

}

playlistsController.like_playlist = function(req, res){

Playlist.findOne({_id: req.params.id}, function(err, the_playlist){	
if (err)
	{console.log(err)
		res.end();}

the_playlist.likes.push(req.body.user_id);
the_playlist.likes_count++;

the_playlist.save(function(err, data){
	if(err)
	{
		console.log('something went wrong')
	}
	else{
		console.log(data);

		User.findOne({_id: req.body.user_id}, function(err, the_user){
if (err)
	{console.log(err)
		res.end();}
			the_user.likes_received++;
			the_user.likes.push(req.body.user_id)
			the_user.save(function(err, data2){
				if (err)
					{console.log('something went wrong')}
				else {
					res.end();
				}
			})

		})

	}
	
})

})

}

playlistsController.get_genre = function(req, res){

Genre.findOne({_id: req.params.id}).populate('playlists')
.exec(function(err, the_genre){
	if (err)
		{console.log(err)
			res.end();
		}
		else{
			res.json(the_genre);
		}
})

}

playlistsController.get_user = function(req, res){

User.findOne({_id: req.params.id}).populate('likes','uploads')
.exec(function(err, the_user){
	if (err)
	{
		console.log(err)
		res.end();
	}
	else{
	res.json(the_user);
}
})

}

playlistsController.get_leaderboard_all = function(req, res){
User.find({}, function(err, the_users){
if (err)
{
	console.log('An error');
	res.end();
}
var sortable = []
for (var the_user in the_users)
{
	sortable.push([the_user._id, the_user.likes_received])

}

sortable.sort(function(a, b) {return a[1] - b[1]})
sortable = sortable.slice(0, 10)
res.json(sortable);



})

}

playlistsController.get_leaderboard_genre = function(req, res){
Genre.findOne({_id: req.params.id}.populate('playlists')
	.exec(function(err, the_genre){
if (err)
	{console.log(err)
		res.end();}
		var sortable = []
for (var the_playlist in the_genre.playlists)
{
	sortable.push([the_playlist._id, the_playlist.likes_count])

}

sortable.sort(function(a, b) {return a[1] - b[1]})
sortable = sortable.slice(0, 10)
res.json(sortable);

	})


)
}






module.exports = playlistsController;