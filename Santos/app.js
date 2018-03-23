let express = require('express'),
    app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', function(req, res){
  res.render('index');
});

app.get('/menu', function(req, res){
  res.render('menu');
});

app.get('/news', function(req, res){
  res.render('news');
});

app.get('/events', function(req, res){
  res.render('events');
});

app.get('/about', function(req, res){
  res.render('about');
});

app.listen(3000, function(){
  console.log('app running');
});
