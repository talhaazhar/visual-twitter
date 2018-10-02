const express = require('express');
const path = require('path');

var Twit = require('twit');
var auth = require("./auth");
var routes = require('./routes/index');
var requester = require("./requester");


var app = express()
app.set('views', path.join(__dirname, 'views'));


const port = 3000


var T = new Twit({
    consumer_key:         auth.data.consumer_key,
    consumer_secret:      auth.data.consumer_secret,
    access_token:         auth.data.access_token,
    access_token_secret:  auth.data.access_token_secret
  })



  T.get('search/tweets', { q: 'Apple since:2011-07-11', count: 10 }, function(err, data, response) {
    for(var i = 0; i < data.statuses.length; i++){
        console.log(data.statuses[i].text)
    }

  })




  app.use(express.static(path.join(__dirname, 'public')));
  app.use('/', routes);



var server = app.listen(port, () => console.log(`App listening on port ${port}!`));
var io = require('socket.io')(server);

io.on('connection', function (socket) {
  console.log("connect")
  
  socket.emit('open', { status: 'connected' });

  socket.on('disconnect', function () {
    io.sockets.emit('close',{status:"disconnected"});
  });

});


requester.request(T, null, io)