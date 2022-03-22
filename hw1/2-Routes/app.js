
const express = require('express');

const app = express()
let port = 3001;

app.get('/', (req, res)=>{

    res.send(`<h1>Hello, world!</h1>`)
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

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
})