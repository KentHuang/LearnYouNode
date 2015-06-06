var http = require('http');
var bl = require('bl');
var results = [];
var count = 0;

function foo (i) {
  http.get(process.argv[2+i], function (res) {
    res.pipe(bl(function(err, data) {
      if (err) { throw err; }
      //console.log(data.toString());
      results[i] = data.toString();
      count++;

      if (count === 3) {
        for (var j = 0; j < 3; j++) {
          console.log(results[j]);
        }
      }
    }));
  });
}

for (var i = 0; i < 3; i++) { 
  foo(i)
}

