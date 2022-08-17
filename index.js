// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api", function(req, res) {
  let nowDate = new Date().toUTCString();
  let nowUnix = + new Date()
  res.json({ unix: nowUnix, utc: nowDate });
});
app.get("/api/:date", function(req, res) {
  const date = req.params.date;
  error = () => res.json({ error: "Invalid Date" });
  if (isNaN(date)) {
    let time = new Date(date).toUTCString();
    let unix = Number(+ new Date(date));
    time==="Invalid Date" ? error() : res.json({ unix: unix, utc: time });
  } else {
    time = new Date(+date).toUTCString();
    unix = Number(date);
    res.json({ unix: unix, utc: time });
  };
});



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
