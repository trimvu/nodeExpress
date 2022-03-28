console.log('here');
const socket = io(); // access to web socket api 


let chatUserName = document.getElementById('chat-username')
let chatMessage = document.getElementById('chat-message')
let chatForm = document.querySelector('form')
let chatDisplay = document.querySelector('.chat-display')

//listen to incoming messages from the server
// {username:..., message:...}
socket.on('updateMessage', data =>{

    //create a p tag 
    let newMessage = document.createElement('p')

    //style the p tag 
    if(chatUserName.value === data.username){
        newMessage.className = "bg-success chat-text"
    }
    else{
        newMessage.className = "bg-info text-warning chat-text"
    }

    //set the inner html for the p tag 

    newMessage.innerHTML = `<strong>${data.username}</strong>: ${data.message}`

    // append to the top of all message in chatDisplay

    chatDisplay.insertBefore(newMessage, chatDisplay.firstChild) //appends to the beginning of all messages


})


//emit a message to the server
chatForm.addEventListener('submit', e=>{

    e.preventDefault()

    console.log('message');

    // send message to the server
    socket.emit('postMessage', {
        username: chatUserName.value, 
        message: chatMessage.value
    })


})