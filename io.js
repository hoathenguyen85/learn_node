var fs = require('fs');

var filePath = process.argv[2];

var buffer = fs.readFileSync(filePath);

console.log(buffer.toString().split("\n").length - 1);


// note you can avoid the .toString() by passing 'utf8' as the
// second argument to readFileSync, then you'll get a String!
//
// fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1