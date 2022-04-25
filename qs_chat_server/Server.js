
/* use http to create server
// import http model
const http = require('http');

// create http server

const server = http.createServer(function(request, response){
    console.log('visit server');

    response.write("call back");
    response.end();
});

// bind the address and port

server.listen(1000, 'localhost');

console.log('the server created');
*/

//use express

// import express
const express = require('express');

//create express server

const server = express();

// mid part: use

server.use('/', function(request, response, next){
    console.log('in use function');
    console.log(request.query.page);
    next();
});



// request handle

const outputs = server.get('/', function(input1, input2){
    input2.send('get get request');

    console.log(input1);
    console.log(input2);
});





server.post('/', function(request, response){
    response.send('get post request');
});

// bind address and port

server.listen(1000);