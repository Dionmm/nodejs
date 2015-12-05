/**
 * Created by dion on 05/12/2015.
 */
var Twitter = require('twitter');
var http = require('http');
var port = process.env.PORT || 1337

var client = new Twitter({
    consumer_key: 'AfbvSlccLW6UfML1TEmNf604J',
    consumer_secret: 'h3HJ6tpITLKoCE3QVul7v8sPRowZPZwu1HEH77hBwxCXT70SgA',
    access_token_key: '25139231-T4ToRmBomtuIt9VN5ImjFHX3OW6kY4wRtzmfT1gW4',
    access_token_secret: 'cvwZzssbqMBCHHCJSWybxIEq4fCj0s4sWLaslUavNz7oP'
});
http.createServer(function(request, response){
    response.writeHead(200, {'Content-Type': 'text/plain'});

    client.get('search/tweets',{q: 'lolcat', count:'2'}, function(error, tweets){
        console.log(tweets);
    });
}).listen(port);
