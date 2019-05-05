
const buf = Buffer.from('hello world', 'ascii'); 


console.log(buf.toString('hex'));

console.log(buf.toString('base64')); 
console.log(buf.toString()); 

const arr = new Uint16Array(2); 

arr[0] = 5000;
arr[1] = 4000; 

const buf1 = Buffer.from(arr); 

const buf2 = Buffer.from(arr.buffer); 

console.log(buf1); 

console.log(buf2); 

