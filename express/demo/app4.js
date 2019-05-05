var express = require('express'); 
var app = express(); 
var router = express.Router(); 
//var multer = require('multer'); 


app.set('port', process.env.PORT || 4000); 





app.get('/upload', function(req, res){
	res.sendfile('./views/upload.html'); 
});
/*
var uploading = multer({ 
	dest: __dirname + './public/uploads/', 
	limits:{fileSize: 1000000, files: 1}, 
}); 
*/ 
app.post('/pictures/upload',  function(req, res) {
		
}); 

module.exports = router 

app.use(express.static('public')); 


app.listen(app.get('port')); 




