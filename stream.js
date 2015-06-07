var fs = require('fs');
var through = require('through2');
var split = require('split');
var count = 0;
process.stdin
  .pipe(split())
  .pipe(through(function (buf, _, next) {
    var line = buf.toString();
    this.push( count%2 === 0 
      ? line.toLowerCase() + '\n'
      : line.toUpperCase() + '\n');
    count++;
    next();
  }))
  .pipe(process.stdout);

