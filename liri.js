require("dotenv").config();

var spotifyAPICall = require("./spotify_api");

var bandsAPICall = require("./bands_test");

var movieAPICall = require("./movies_test");

var random = require("./it_says");
var axios = require("axios");

var userDidAddInput = false;

var masterString = "";

var userInput = process.argv[2];

if (process.argv[3] != undefined) {
  //adjust the userDidAddInput variable so we don't go with the default cases

  userDidAddInput = true;

  masterString = "";
  //for loop to bring the master string together
  for (var i = 3; i < process.argv.length; i++) {
    //setting Master string to nothing to make room for new search term

    if (i == process.argv.length - 1) {
      //making sure the final term added to master string has no plus sign
      masterString = masterString + process.argv[i];
    } else {
      //adding the term and a plus sign to each term that's part of the song
      masterString = masterString + process.argv[i] + "+";
    }
  }
}

switch (userInput) {
  case "spotify-this-song":
    if (process.argv[3] == undefined) {
      masterString = "The Sign";
    }
    spotifyAPICall.getSong(masterString);

    break;
  case "concert-this":
    if (process.argv[3] == undefined) {
      masterString = "Carrie Underwood";
    }
    bandsAPICall.getConcert(masterString);

    break;
  case "movie-this":
    if (process.argv[3] == undefined) {
      masterString = "Mr. Nobody";
    }
    movieAPICall.getMovie(masterString);
    break;
  case "do-what-it-says":
    // code block
    break;
  default:
    console.log(
      "You typed an invalid command. Please restart the program and type 'movie-this', 'concert-this', 'spotify-this-song', or 'do-what-it-says' to run the program."
    );
}
