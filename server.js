//lets require/import te mondoDB native drivers
var mongodb = require('mongodb');
//and our HTTP server
var http = require('http');
//port
var port = process.env.PORT || 1337;
//Connection URL.
var url = 'mongodb://nodejs:password@ds059524.mongolab.com:59524/nodejs'

var MongoClient = mongodb.MongoClient;


http.createServer(function(request,response){
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Connecting \n');
    MongoClient.connect(url, function(err, db){
        response.write('Connection made \n');
        if(err){
            response.write('Unabled to connect to the mongoDb server. Error:' + err + "\n");
            db.close();
        } else{
            response.write('Connection established to ' + url + "\n");

            db.close();
        }
        response.end('Finished, connection closed \n');
    });
}).listen(port);