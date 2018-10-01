const express = require('express')
var Twit = require('twit')
var auth = require("./auth")


const app = express()
const port = 3000


var T = new Twit({
    consumer_key:         auth.data.consumer_key,
    consumer_secret:      auth.data.consumer_secret,
    access_token:         auth.data.access_token,
    access_token_secret:  auth.data.access_token_secret
  })

  T.get('search/tweets', { q: 'tesla since:2011-07-11', count: 10 }, function(err, data, response) {
    for(var i = 0; i < data.statuses.length; i++){
        console.log(data.statuses[i].text)
    }

  })


app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`App listening on port ${port}!`))