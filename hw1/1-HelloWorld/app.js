
const express = require('express');

const app = express()
let port = 3001;

app.get('/', (request, response)=>{

    response.send(`<h1>Hello, world!</h1>`)
})

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
})