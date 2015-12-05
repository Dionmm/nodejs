/**
 * Created by dion on 05/12/2015.
 */
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
            response.write('Unable to connect to the mongoDb server. Error:' + err + "\n");
            db.close();
        } else{
            response.write('Connection established to ' + url + "\n");
            var collection = db.collection('users');
            var user1 = {name: 'modulus admin', age: 42, roles: ['admin','moderator','user']};
            var user2 = {name: 'modulus user', age: 22, roles: ['user']};
            var user3 = {name: 'modulus super admin', age: 92, roles: ['super-admin','admin','moderator','user']};
            //insert some users
            collection.insert([user1, user2, user3], function(err, result){
                if(err){
                    response.write('Insert failed ' + err + "\n");
                } else{
                    console.log(result);
                    response.write('Inserted ' + result.insertedCount + 'documents ok. \n');
                }
                db.close();
                response.end('Finished, Connection closed \n');
            });
        }
    });
}).listen(port);/**
 * Created by dion on 05/12/2015.
 */
