
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

// app.get('/greets/:name', (req, res)=>{
//     let name = req.params.name
//     console.log(req.params);
//     res.send(`<h1>Hello, ${name}!</h1>`);
// })

// localhost:3001/greets/Tom/year?age=44

app.get('/greets/:name/year', (req, res)=>{
    let name = req.params.name
    let age = req.query.age
    let dob = parseInt(2022) - parseFloat(age);
    console.log(req.params);
    console.log(req.query);
    res.send(`<h1>Hello, ${name}!</h1>
        You were born in ${dob-1} or ${dob}.
    `);
})

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
})