
const express = require('express');
const router = express.Router();

const aboutFile = require('../data/about.json');

let aboutInfo = aboutFile.about;

// console.log(aboutInfo.imgURL);

router.get('/about', (req, res)=>{

    let image = [];
    let des1 = [];
    let des2 = [];
    let des3 = [];
    let des4 = [];

    aboutInfo.forEach(object =>{
        image = image.concat(object.imgURL);
        des1 = des1.concat(object.description1)
        des2 = des2.concat(object.description2)
        des3 = des3.concat(object.description3)
        des4 = des4.concat(object.description4)
    })

    res.render('about', {

        groupImage: image,
        des1: des1,
        des2: des2,
        des3: des3,
        des4: des4

    })
})


module.exports = router;