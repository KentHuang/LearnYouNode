var http = require('http');

var server = http.createServer(function (req, res) {
  var url_parsed = require('url').parse(req.url, true); 
  var pname = url_parsed.pathname;
  var pdate =  new Date(url_parsed.query.iso);
  var obj = {};
  if (pname === '/api/parsetime') {
    obj = { 'hour': pdate.getHours(), 
            'minute': pdate.getMinutes(), 
            'second': pdate.getSeconds() };
  } else if (pname === '/api/unixtime') {
    obj =  { 'unixtime': pdate.getTime() };
  }
  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.end(JSON.stringify(obj));
});

server.listen(process.argv[2]);
