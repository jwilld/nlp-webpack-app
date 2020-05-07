// api key/ id
const dotenv = require("dotenv");
dotenv.config();
const api_key = process.env.API_KEY;
const app_id = process.env.API_ID;


let path = require("path");
const express = require("express");
const mockAPIResponse = require("./mockAPI.js");

//aylien api
const aylienAPI = require("aylien_textapi");
const urlapi = new aylienAPI({
  application_key: api_key,
  application_id: app_id,
});

const getSentiment = async () => {
  const sentiment = await urlapi.sentiment(
    {
      url:
        "https://www.cnn.com/2020/05/05/us/naked-bike-ride-portland-coronavirus-trnd/index.html",
    },
    (error, response) => {
      if (error === null) {
        console.log(response);
      } else {
        console.log(error);
      }
    }
  )
  return sentiment
};
getSentiment()



const app = express();

app.use(express.static("dist"));

console.log(__dirname);

app.get("/", function (req, res) {
  // res.sendFile('dist/index.html')
  res.sendFile(path.resolve("src/client/views/index.html"));
});

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
  console.log("Example app listening on port 8080!");
});

app.get("/test", function (req, res) {
  res.send(mockAPIResponse);
});

module.exports = getSentiment;
