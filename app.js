var express = require('express')
var app = express()
app.use(express.static('build'))

app.get('/', function (req, res) {
  res.sendFile('index.html');
})

app.listen(3000, function () {
  console.log('Static server started on localhost:3000')
})