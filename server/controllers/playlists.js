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
Genre.findOne({_id: req.params.genreId}, function(err, the_genre){
User.findOne({_id: req.body.user_id}, function(err, the_user){

if (err)
	{console.log(err);
		res.end();}
console.log('the genre', req.params.genreId);
var playlist = new Playlist({user_name: req.body.user_name, genre_name: req.body.genre_name, playlist_name: req.body.playlist_name,
 source: req.body.source, link: req.body.link, likes_count: 0})
playlist._genre = the_genre._id;
playlist._user = req.body.user_id;

the_genre.playlists.push(playlist);
console.log('playlist info', the_genre.playlists);
console.log('break');
the_user.uploads.push(playlist);
playlist.save(function(err, the_playlist){
the_user.save(function(err, data3){

	the_genre.save(function(err,data){
	if(err){
		console.log('somethign went wrong')
	}
	else{


		console.log(data);
		res.json(the_playlist);
	}
})

})

	

})


})})
//find1

}

playlistsController.like_playlist = function(req, res){

	Playlist.findOne({_id: req.params.playlistid}, function(err, the_playlist){	
		if (err)
			{console.log(err)
			res.end();}
		temp = true;
			for (var i=0; i<the_playlist.likes.length; i++){
				
				if (the_playlist.likes[i] == req.body.user_id)
					{
					
						temp = false;
						res.json(the_playlist.likes_count);
						break;
					}
				}
			if (temp)
			{
				the_playlist.likes.push(req.body.user_id);
				the_playlist.likes_count++;

				the_playlist.save(function(err, data){
				if(err)
				{
				console.log('something went wrong')
				}
			else{
				console.log(data.likes_count);

				User.findOne({_id: req.body.user_id}, function(err, the_user){
			if (err)
			{console.log(err)
				res.end();}
			else{
			

					// the_user.likes_received++;
				the_user.likes.push(the_playlist)
				console.log('hey there',the_user.likes[the_user.likes.length-1])
				the_user.save(function(err, data2){
				if (err)
					{console.log('something went wrong')}
				else {
					console.log('the playlist', the_playlist);
					User.findOne({_id: the_playlist._user}, function(err, liked_user){
						console.log('the liked user', liked_user);
						liked_user.likes_received++;
						
						liked_user.save(function(err, data5){

							console.log('liked user', liked_user.likes_received)
								console.log('i should have saved', data2);
						res.json(data2);
						})

					})
					
							
						}
					})} //else

				})
			}	
		})}
		else{res.end();}

	})

	}

	playlistsController.get_genre = function(req, res){

	Genre.findOne({_id: req.params.genreId}).populate('playlists')
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

playlistsController.get_genres = function(req, res){

Genre.find({}, function(err, the_genres){
	if (err)
		{console.log('an error')}
	else{

		res.json(the_genres);
	}
})

}

playlistsController.get_user = function(req, res){
console.log('user ran');
User.findOne({_id: req.params.userId}).populate('likes','uploads')
.exec(function(err, the_user){
	if (err)
	{
		console.log(err)
		res.end();
	}
	else{
		console.log(the_user);
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
console.log('leaderboarding', the_users[0]);
for (var the_user in the_users)
{
if(the_users[the_user].likes_received == undefined || the_users[the_user].likes_received == null)
{
	the_users[the_user].likes_received = 0;
}

	sortable.push([the_users[the_user]._id, the_users[the_user].likes_received])

}

sortable.sort(function(a, b) {return b[1] - a[1]})

sortable = sortable.slice(0, 10)
res.json(sortable);



})

}

playlistsController.get_leaderboard_genre = function(req, res){
	console.log(req.params.genreId);
Genre.findOne({_id: req.params.genreId}).populate('playlists')
	.exec(function(err, the_genre){
if (err)
	{console.log(err)
		res.end();}
	else{

				console.log('genre infoo', the_genre.playlists);
		var sortable = []
for (var the_playlist in the_genre.playlists)
{
	if(the_genre.playlists[the_playlist].likes_count == undefined || the_genre.playlists[the_playlist].likes_count == null)
{
	the_genre.playlists[the_playlist].likes_count = 0;
}

	sortable.push([the_genre.playlists[the_playlist]._id, the_genre.playlists[the_playlist].likes_count])



}

sortable.sort(function(a, b) {return b[1] - a[1]})

console.log('entire array', sortable);
sortable = sortable.slice(0, 10)
res.json(sortable);

	}


	})



}






module.exports = playlistsController;