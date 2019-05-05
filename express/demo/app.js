var express = require('express'); 
var hbs = require('hbs'); 
var path = require('path'); 
var api = require('./routes/api'); 
var app = express(); 


app.set('port', process.env.PORT || 4000); 

//app.set('views', path.join(__dirname, 'views')); 

//app.set('view engin', 'jade'); 
/*
app.use(express.favicon()); 
app.use(express.logger('dev')); 
app.use(express.bodyParser());
app.use(express.methodOverride()); 
app.use(app.router); 

app.use(express.static(path.join(__dirname, 'public'))); 
*/
/*
app.get('/', function(req, res){
	var body = 'Hello World'; 
	res.setHeader('Content-Type', 'text/plain'); 
	res.setHeader('Content-Length', body.length);
	res.send(body); 
	//res.send('Hello World'); 
	
	
});  */ 
/*
app.get('/', function(req, res) {
	res.sendfile(__dirname + '/views/index.html'); 
}); 

app.get('/about', (req, res) => {
	res.sendfile(__dirname + '/views/abount.html'); 
}); 

app.get('/article', (req, res) => { 
	res.sendfile(__dirname + '/views/article.html'); 
}); 
*/ 

app.set('view engine', 'html'); 
app.engine('html', hbs.__express); 
app.get('/', function(req, res) {
	res.render('index'); 
}); 

app.get('/about', function(req, res){
	res.render('about'); 
}); 

app.get('/article', function(req, res) {
	res.render('article'); 
}); 

app.get('/api', api.index); 
/*
app.get('/api', function(request, response) {
	response.send({name:"张三", age: 40}); 
}); */ 

app.listen(app.get('port')); 




