var mongoose = require('mongoose'); 

db = mongoose.connection; 

db.on('error', console.error.bind(console, 'connection error:')); 
db.on('open', ()=>{
    console.log('db open');
});

db.on('connecting', ()=>{
    console.log('db connecting...'); 
});

db.on('connected', ()=>{
    console.log('db connectoed')
});

db.on('disconnecting', ()=>{
    console.log('db disconnecting...');
});

db.on('disconnected', ()=>{
    console.log('db disconnected'); 
});

db.on('close', ()=>{
    console.log('db close'); 
})

console.log("here"); 
// 启动db 
// mongoose.connect('mongodb://localhost:27017');
mongoose.connect('mongodb://localhost:27017/TengitsWApplog'); 


console.log("xxxx"); 

var Schema = mongoose.Schema; 

var phoneSchema = new Schema({
    devide: String, 
    isSmart: Boolean, 
    releaseTime: Date, 
    price: Number, 
    apps: [{name: String}], 
    manufacturer: {
        name: String, 
        country: String
    }
});

phoneSchema.add({color: 'string'})

// Model 

var Phone = mongoose.model('Phone', phoneSchema); 

var iPhoneSE = new Phone({
   device: "iPhone SE", 
   isSmart: "true", 
   releaseTime: "2016-03-21 10:00:00", 
   price: 4999, 
   apps: [{name: "Safari"}, {name: "Map"}, {name: "Tinder"}], 
   manufacturer: {
       name: "Apple", 
       country: "The United States"
   }
});

console.log(JSON.stringify(iPhoneSE));
