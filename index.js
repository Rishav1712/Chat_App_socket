const express = require('express');
const http = require('http');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);

    socket.on('msg_send', (data) => {
        console.log(data);
        socket.emit('msg_recd',data);
        socket.broadcast.emit('msg_rcvd',data)
    })
});

app.use('/', express.static(__dirname + '/public'));

server.listen(3000, () => {  
    console.log('Server started on port 3000');
});
