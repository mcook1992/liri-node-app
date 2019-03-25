var axios = require("axios");
var moment = require("moment");

var artist = "Arianna+Grande";

function getConcert(artistName, callback) {
  axios
    .get(
      "https://rest.bandsintown.com/artists/" +
        artistName +
        "/events?app_id=codingbootcamp"
    )
    .then(function(response) {
      console.log("The artists performing are: ");
      response.data[0].lineup.forEach(element => {
        console.log(element);
      });
      console.log("The venue name is: " + response.data[0].venue.name);
      console.log("The city is: " + response.data[0].venue.city);

      var dateTime = moment(response.data[0].datetime).format("MM/DD/YYYY");

      console.log("The date is: " + dateTime);
    })
    .catch(function(err) {
      console.error("Error occurred: " + err);
    });
}

module.exports = {
  getConcert: getConcert
};
