/**
 * Created by dion on 05/12/2015.
 */
var Twitter = require('twitter');
var http = require('http');
var port = process.env.PORT || 1337;
var url = require('url');
var queryData = url.parse(request.url, true).query;
var search = queryData.q;

var client = new Twitter({
    consumer_key: 'AfbvSlccLW6UfML1TEmNf604J',
    consumer_secret: 'h3HJ6tpITLKoCE3QVul7v8sPRowZPZwu1HEH77hBwxCXT70SgA',
    access_token_key: '25139231-T4ToRmBomtuIt9VN5ImjFHX3OW6kY4wRtzmfT1gW4',
    access_token_secret: 'cvwZzssbqMBCHHCJSWybxIEq4fCj0s4sWLaslUavNz7oP'
});

http.createServer(function(request, response) {
    response.writeHead(200, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin' : '*' });

    client.get('statuses/user_timeline', {screen_name: search, count:'10'}, function(error, tweets){

        var json = [];
        for (var i =0; i< tweets.length ; i++)
        {
            json.push({username: tweets[i].user.screen_name, image: tweets[i].user.profile_image_url, text: tweets[i].text});
        }

        response.end(JSON.stringify(json));
    });

}).listen(port);
