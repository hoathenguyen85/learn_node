var fs = require('fs');

fs.readFile(process.argv[2], {encoding: 'utf8'}, function(err, data){
  if(!err){
    console.log(data.split('\n').length - 1);
  }
});