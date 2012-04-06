var connect = require('connect');
var clientinfa = require('../lib');

var port = process.env.PORT || '8080';
var app = connect()
  .use(connect.logger('dev'))
  .use(clientinfa.whatsmyip())
  .use(function(req, res){
    res.end('your ip address :'+req.clientinfa.ip);
  })
 .listen(Number(port));

console.log('server started on port '+port);

