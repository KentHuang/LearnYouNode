module.exports = function (dir, ext, callback) {
  var fs = require('fs');
  var path = require('path');
  fs.readdir(dir, function (err, files) {
    if (err) {
      callback(err, null);
    } else {
      var data = [];
      for(var i = 0; i < files.length; i = i + 1) {
        if (path.extname(files[i]).slice(1) === ext) {
          data.push(files[i]);
        }
      } 
      callback(null, data);
    }
  });
}
