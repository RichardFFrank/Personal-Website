var express = require('express');

var app = express();
var handlebars = require('express-handlebars').create({defaultLayout:'main'});

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 11380);

app.use(express.static('views/images'));  
app.use(express.static('views/public'));
app.use(express.static('/public'));

app.get('/',function(req,res){
  res.render('homepage');
});

app.get('/home',function(req,res){
    res.render('homepage');
  });
  

app.get('/resume',function(req,res){
    res.render('resumevisual');
});
  
app.get('/portfolio',function(req,res){
    res.render('portfolio');
});

app.post('/', function(req,res){
  res.render('homepage');
});

app.post('/resume',function(req,res){
  res.render('resumevisual', context);
});

app.post('/portfolio',function(req,res){
  res.render('portfolio', context);
});

app.use(function(req,res){
    res.status(404);
    res.render('404');
});
  
app.use(function(err, req, res, next){
  console.error(err.stack);
  res.type('plain/text');
  res.status(500);
  res.render('500');
});

app.listen(process.env.PORT, function(){
    console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});