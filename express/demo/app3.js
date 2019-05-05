var express = require('express'); 
var app = express(); 
var router = express.Router(); 


app.set('port', process.env.PORT || 4000); 

router.use(function(req, res, next) {
	console.log(req.method, req.url); 
	next(); 
}); 

router.param('name', function(req, res, next, name) {
	console.log(name); 
	req.name = name; 
	next(); 
}); 

router.get('/hello/:name', function(req, res) {
	res.send('hello ' + req.name + '!' ); 
}); 


router.get('/', function(req, res) {
	res.send('首页'); 
}); 

router.get('/about', function(req, res) {
	res.send('关于'); 
}); 

router.route('/api') 
	.post(function(req, res) {
		
		// ... 
		res.send('post method'); 

	}) 
	.get(function(req, res) {
	/*	Bear.find(function(err, bears) {
			if (err) 
				res.send(err); 
			res.json(bears); 
		}); 
	*/ 
		res.send('get method'); 
	
	}); 
app.use('/', router); 


app.route('/login') 
	.get(function(req, res) {
		res.send('this is the login form'); 
	}) 
	.post(function(req, res) {
		console.log('processing'); 
		res.send('processing the login form!'); 
	}); 

app.listen(app.get('port')); 




