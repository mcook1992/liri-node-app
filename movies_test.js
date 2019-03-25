var axios = require("axios");

var queryBeginning = "http://www.omdbapi.com/?t=";

var endTerm = "&y=&plot=short&apikey=trilogy";

// for (var i = 2; i < process.argv.length; i++) {}
function getMovie(movieName) {
  axios
    .get(queryBeginning + movieName + endTerm)

    .then(response => {
      // console.log(response);
      console.log("Movie title: " + response.data.Title);
      console.log("Plot: " + response.data.Plot);
      console.log("Year Released: " + response.data.Year);
      console.log("Country " + response.data.Country);
      console.log("Language: " + response.data.Language);
      console.log("Actors: " + response.data.Actors);
      // console.log(response.data.imdbRating);
      console.log("Rating: " + response.data.Ratings[0].Value);
    });
}

module.exports = {
  getMovie: getMovie
};
