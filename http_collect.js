var http = require('http');
var bl = require('bl');

http.get(process.argv[2], function(res) {
  //var concat = '';

  //res.setEncoding('utf8');
  /*
  res.on('data', function(data) {
    concat += data;
  })

  res.on('end', function() {
    console.log(concat.length);
    console.log(concat);
  })
  */

  res.pipe(bl(function (err, data) {
    var dataString = data.toString();
    console.log(dataString.length);
    console.log(dataString);
  }));
});