
const express = require('express');

const app = express()
let port = 3001;

app.get('/', (request, response)=>{

    response.send(`<h1>Hello, world!</h1>`)
})

app.get('/cats?', (req, res)=>{
    res.send('Meow')
})

app.get('/dogs?', (req, res)=>{
    res.send('Woof')
})

app.get('/cats?_and_dogs?', (req, res)=>{
    res.send('Living Together')
})

app.get('/greets/:name', (req, res)=>{
    let name = req.params.name
    console.log(req.params);
    res.send(`<h1>Hello, ${name}!</h1>`);
})

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
})