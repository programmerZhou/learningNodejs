var redis = require('redis'); 

var client = redis.createClient('6379', 'localhost'); 


client.on("error", function(error) {
	console.log(error); 
}); 


//client.auth("foobared'); 
client.select('15', function(error) {
	if (error) {
		console.log(error); 
	} else {
		client.set('str_key_0', '0', function(error, res){
			if (error) {
				console.log(error); 
			} else {
				console.log(res); 
			}
		 	// close connection 
		 	client.end(); 
		}); 
	}
}); 

client.set("string key" , "string val", redis.print); 
client.hset("hash key", "hashtest 1", "some value", redis.print); 
client.hset(["hash key", "hashtest 2", "some other value"], redis.print); 
client.hkeys("hash key", function (err, replies) {
	console.log(replies.length + " replies:" ); 
	replies.forEach(function (reply, i) {
		console.log("     " + i + ": " + reply); 
	});
	client.quit();
})  
