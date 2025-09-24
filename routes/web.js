import express from "express"
const web = express.Router()

web.get('/', (req, res) => {
    res.render('index')
})

web.get('/{:username}', (req, res) => {
    const username = req.params.username
    const profile = {
        username : "Owen",
        bio : "Halo nama saya sigma"
    }
    res.render('public-profiles', {
        title: profile.username,
        username: profile.username,
        bio: profile.bio
    });
})

export default web
