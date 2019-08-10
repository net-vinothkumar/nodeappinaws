var express = require('express');
var app = express();
app.get('/', function (req, res) {
  res.send('I am a small node application running in AWS EC2.');
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
