var socket = io.connect("http://localhost:3000")

var div = document.getElementById('data');


socket.on('tweet', function(twit){
    div.innerHTML += "<p>" + twit.name + "</br>" + twit.text + "</p>"
})