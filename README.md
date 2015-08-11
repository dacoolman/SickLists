This is an application to show the best playlists across different websites (Youtube, Spotify, 8tracks, etc). It organizes the playlists by genre then likes and has leaderboards to show the most popular playlists. It is written in full MEAN; front end uses Angular.js, back-end uses Node.js and Express, and the database is MongoDB.

Additionally playlists that users create or like are saved in their profile so they can keep track of them and see how many likes their playlists get.

Saving which playlists users liked or updated were made with associations in Mongo and sorted based on how many users liked the playlist. Users can only like a playlist once.

To deploy Sick Lists, run nodemon/node on server.js after installing and running Mongo (start mongo server with sudo mongod) and go to localhost:8000

Users can currently create as many genres as they want, however eventually this will be handled by moderators.
