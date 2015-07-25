var http = require('http');
var bl = require('bl');

var getData = function(url) {
  return new Promise(function(resolve, reject){
    http.get(url, function(response){
      response.pipe(bl(function(error, data) {
        if(error)
          return reject(error);

        resolve(data.toString());
      }));
      response.on('error', reject);
    });
  });
}

getData(process.argv[2]).then(function(data) {
  console.log(process.argv);
  console.log(data);
  return getData(process.argv[3]);
}).then(function(data) {
  console.log(data);
  return getData(process.argv[4]);
}).then(console.log
).catch(console.error);