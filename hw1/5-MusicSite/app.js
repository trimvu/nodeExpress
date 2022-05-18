
const express = require('express');
const app = express();
const socket = require('socket.io');
let PORT = process.env.PORT || 8080;

app.use(express.static('public'))

app.set('view engine', 'ejs');

app.use(require('./routes/index'));
app.use(require('./routes/about'));
app.use(require('./routes/albums'));
app.use(require('./routes/feedback'));
app.use(require('./routes/chat'));


let server = app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`);
})

let io = socket(server);

//listen for client messages

io.on('connection', socket =>{

    socket.on('postMessage', msgClient=>{ // listening for incoming chat messages

        io.emit('updateMessage', msgClient) // broadcasts back out to all of the clients
    })
})