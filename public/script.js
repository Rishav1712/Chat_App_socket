
    var socket = io();

     let btn = document.getElementById('btn');
     let inputMsg = document.getElementById('newmsg');
     let msgList = document.getElementById('msgList');

     btn.onclick = function exec(){
        socket.emit('msg_send', {
            msg: inputMsg.value
        });
     }

     socket.on('msg_recd', (data)=>{
        let limsg = document.createElement('li');
        limsg.innerText = data.msg;
        msgList.appendChild(limsg);
     });
    //     btn.onclick = function exec() {
    //         socket.emit('from_client');
    //     };

    // socket.on('from_server', () => {  
    //     console.log("collected a new event from server");
    //     const div = document.createElement('div');
    //     div.innerText = 'New event from server';
    //     console.log(div); 
    //     document.body.appendChild(div);
    // });