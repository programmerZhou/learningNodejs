var express = require('express'); 
var hbs = require('hbs'); 
var app = express(); 


app.set('port', process.env.PORT || 4000); 

var blogEngine = require('./blog'); 

app.set('view engine', 'html'); 
app.engine('html', hbs.__express); 

app.get('/', function(req, res) {
	res.render('index', {title:"最近文章", entries:blogEngine.getBlogEntries()}); 
}); 


app.get('/about', function(req, res){
	res.render('about', {title:"自我介绍"});
});

app.get('/article/:id', function(req, res){
	console.log("id is:",  req.params.id); 
	var entry = blogEngine.getBlogEntry(req.params.id); 
	console.log(JSON.stringify(entry)); 
	res.render('article', {title:entry.title, blog:entry}); 
}); 

app.use(express.static('public')); 


app.listen(app.get('port')); 




