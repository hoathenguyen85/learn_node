var fs = require('fs');
var path = require('path');

module.exports = function (dirname, ext, callback) {
  fs.readdir(dirname, function(err, list) {
    if(err){
      return callback(err, []);
    }

    var data = list.filter(function(element) {
      return path.extname(element) === ('.' + ext);
    })

    callback(null, data);
  });
}