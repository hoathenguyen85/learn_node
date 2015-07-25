var http = require('http');

var getData = function(url) {
  return new Promise(function(resolve, reject){
    http.get(url, function(response){
      var concat = '';

      response.setEncoding('utf8');

      response.on('data', function(data) {
        concat += data + '\n';
      });

      response.on('end', function() {
        return resolve(concat);
      });

      response.on('error', reject);
    });
  });
}

getData(process.argv[2])
  .then(console.log)
  .catch(console.error);