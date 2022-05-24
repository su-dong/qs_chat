const io = require('socket.io')

var socket = io("http://localhost:5000/");

let newMessage = {name:'test', msgText:'test'};


socket.emit('message', newMessage);