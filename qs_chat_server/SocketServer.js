const io = require('socket.io')(5000, {
    cors: {
    origin: '*',
  }
})

io.on('connection', socket =>{
    console.log('a user connected');

    io.emit('message', {name:'server', msgText:'welcome'});
    
    socket.on('message', function(data){
        console.log('got message')
        console.log(data)
        socket.broadcast.emit('message', data);
    })
})





