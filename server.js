var express = require('express');
var app = express();

app.use('/public', express.static(__dirname + '/public'));
app.engine('html', require('ejs').renderFile);
app.set('views', __dirname + '/views');
app.set('view engine', 'html');

app.get('/', function (req, res) {
  res.render('home', {
    title: 'Hello World!'
  });
});

app.listen(3000);