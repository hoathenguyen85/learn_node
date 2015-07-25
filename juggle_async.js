var http = require('http');
var bl = require('bl');

var getData = function(index) {
  var url = process.argv[index];

  // synchronous call that stops the recursion
  if(!url)
    return;

  return new Promise(function(resolve, reject){
    http.get(url, function(response){
      response.pipe(bl(function(error, data) {
        if(error)
          return reject(error);

        resolve(data.toString());
      }));
      response.on('error', reject);
    });
  }).then(function(data) {
    console.log(data);

    getData(++index);
  });
}

getData(2);