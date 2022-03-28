
const express = require('express');
const router = express.Router();

// read and write to a file
const fs = require('fs');
const { isBuffer } = require('util');

// import the contents of feedback.json file

const feedbackData = require('../data/feedback.json'); // convert to js object

// console.log(feedbackData);

router.use(express.json())
router.use(express.urlencoded({extended: true}))

// [{}, {}, {}, {}, {}, {}]

// localhost:3000/feedback
router.get('/feedback', (req, res)=>{
    res.render('feedback')
})


// get all the messages from feedback.js

router.get('/api', (req, res)=>{
    res.json(feedbackData);
})

// submit a new message

router.post('/api', (req, res)=>{

    let {name, title, message} = req.body;

    // push it to the data to feedbackData obj;

    feedbackData.push(req.body);

    fs.writeFile('data/feedback.json', JSON.stringify(feedbackData), 'utf8', err=>{

        if(err){
            console.log(err);
        }

        console.log('feedback.json file has been updated');

    })

    // send back all of the messages with the new message attached

    res.json(feedbackData)


})


// delete a message

router.delete('/api', (req, res)=>{
    
})


module.exports = router;