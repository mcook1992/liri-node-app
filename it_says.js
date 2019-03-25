var fs = require("fs");
var spotifyAPICall = require("./spotify_api");

var bandsAPICall = require("./bands_test");

var movieAPICall = require("./movies_test");

if (process.argv[2] == "do-what-it-says") {
  randomFunction();
}

function randomFunction() {
  fs.readFile("random.txt", "utf8", function(err, data) {
    if (err) {
      return console.log(err);
    }

    // Break down all the numbers inside
    data = data.split(" ");

    var randomFileInput = data[0];
    var string = "";

    for (var i = 1; i < data.length; i++) {
      if (i == data.length - 1) {
        string += data[i];
      } else {
        string += data[i] + "+";
      }
    }

    switch (randomFileInput) {
      case "spotify-this-song":
        spotifyAPICall.getSong(string);

        break;
      case "concert-this":
        bandsAPICall.getConcert(string);

        break;
      case "movie-this":
        movieAPICall.getMovie(string);
        break;
    }
  });
}

module.exports = {
  randomFunction: randomFunction
};
