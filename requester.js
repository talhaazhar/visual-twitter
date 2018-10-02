


function sortTopic(topic){
  return null;
}


function sendTweet(topic, tweetData, io) {

  var twit  = {
    topic : topic,
    text: tweetData.text,
    name: tweetData.user.name,
  }


  io.sockets.emit('tweet', twit);
}

module.exports = {
    request: function(T, params, io) {
        var stream = T.stream('statuses/filter',{ 
            track: "trump"
        });
        
        //Listener on tweets coming in from the streaming API
        stream.on('tweet', function (tweet) {
          //var topic = sortTopic(tweet.text);
          sendTweet("trump", tweet, io);
      
          // for(var i=0;i<__topics.length;i++) {
          //   if (DEBUG) {
          //     console.log("sending",__topics[i])
          //   }
          //   sendTweet("trump", tweet, io);
          // }
        })
    }
 }