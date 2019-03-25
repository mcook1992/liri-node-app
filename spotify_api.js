require("dotenv").config();

var Spotify = require("node-spotify-api");

var keys = require("./keys.js");

var masterString = "All the Small Things";

var spotify = new Spotify(keys.spotify);

function getSong(songName) {
  spotify
    .request("https://api.spotify.com/v1/search?q=" + songName + "&type=track")
    .then(function(data) {
      console.log("Title of Song: " + data.tracks.items[0].name);
      console.log("Song URL: " + data.tracks.items[0].external_urls.spotify);
      console.log("Album Name: " + data.tracks.items[0].album.name);
      console.log("Artist Name: " + data.tracks.items[0].artists[0].name);
      return data;
    })
    .catch(function(err) {
      console.error("Error occurred: " + err);
    });
}

module.exports = {
  getSong: getSong
};
