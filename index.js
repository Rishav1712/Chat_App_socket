const express = require('express');
const http = require('http');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);

    socket.on('from_client', () => {
        console.log('from client:');
        //  socket.emit('from the server');  
    });
    setInterval(() =>{
        socket.emit('from_server');
    },  2000);
});
    // socket.on('disconnect', () => {
    //     console.log('User disconnected:', socket.id);
    // });

app.use('/', express.static(__dirname + '/public'));

server.listen(3000, () => {  
    console.log('Server started on port 3000');
});
