(function() {

  var express = require('express')
    , app = express()
    , path = require('path')

  app.use('/:filePath', function(req, res, next) {
  	res.sendFile(path.join(__dirname + req.params.filePath));
  })

  app.use('/', function(req, res, next) {
    res.sendFile(path.join(__dirname + '/index.html'));
  });

  app.use(function (err, req, res, next) {
      res.send('error: ' + JSON.stringify(err));
  });

  app.listen(80);

})();
