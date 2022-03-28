
const express = require('express');
const router = express.Router();

const dataFile = require('../data/data.json');

let albumInfo = dataFile.data;

// console.log(albumInfo.imgURL);

router.get('/', (req, res)=>{

    let albumArt = [];
    let albumTitle = [];

    albumInfo.forEach(titleArt => {
        albumArt = albumArt.concat(titleArt.imgURL);
        albumTitle = albumTitle.concat(titleArt.name);
    })

    console.log(albumArt);
    console.log(albumTitle);

    res.render('index', {
        albumArtwork: albumArt,
        albumTitles: albumTitle,
        allInfo: albumInfo,
    })
})

module.exports = router;