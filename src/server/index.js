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


const getSentiment = async (req,res,url) => {
   await urlapi.sentiment(
    {
      url:
        url,
    },
    (error, response) => {
      if (error === null) {
        res.send( response);
      } else {
        res.send(error);
      }
    }
  )
};

const app = express();

/* Middleware*/
const bodyParser = require('body-parser');
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

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

app.post("/sentiment", async (req, res) => {
  getSentiment(req,res,req.body.url) 
});

module.exports = getSentiment;
