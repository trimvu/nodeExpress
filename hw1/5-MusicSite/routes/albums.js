
const express = require('express');
const router = express.Router();

const dataFile = require('../data/data.json');

let albumInfo = dataFile.data;

// console.log(albumInfo.imgURL);

router.get('/albums', (req, res)=>{

    let albumArt = [];
    let albumTitle = [];

    albumInfo.forEach(titleArt => {
        albumArt = albumArt.concat(titleArt.imgURL);
        albumTitle = albumTitle.concat(titleArt.name);
    })

    // console.log(albumArt);
    // console.log(albumTitle);

    res.render('albums', {
        albumArtwork: albumArt,
        albumTitles: albumTitle,
        allInfo: albumInfo,
        albumDetail: [],
        pageTitle: "Albums"
    })
})

// localhost:3000/albums/id
router.get('/albums/:albumID', (req, res)=>{

    let albumID = req.params.albumID;
    let art = [];
    let detail = [];
    let songs = [];
    let members = [];

    albumInfo.forEach(object => {
        if(object.shortname === albumID){
            art = object.imgURL
            detail.push(object)
            songs.push(object.songTitles)
            members.push(object.members)
        }
    })

    console.log(art);
    // console.log(members);
    // console.log(detail);
    // console.log(songs);

    res.render('albumsID', {
        albumArt: art,
        albumDetail: detail,
        songNames: songs,
        allInfo: [],
        pageTitle: `${detail[0].name}`,
        members: members
    })
})

module.exports = router;