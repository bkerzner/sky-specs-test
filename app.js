const express = require('express')
const gistAPI = require('./utils/gist-api')
const favoritesAPI = require('./utils/favorites-api')

const app = express()

app.use(express.static('public'))

app.get('/gists/user', (req, res) => {
    const userName = req.query.userName;
    if (!userName) {
        res.status(400).send('userName parameter missing')
    }
    gistAPI.getGistsForUser(userName)
        .then((gists) => (res.send(gists)));
})

app.get('/gist', (req, res) => {
    const id = req.query.id;
    if (!id) {
        res.status(400).send('id parameter missing')
    }
    gistAPI.getGistById(id)
        .then((gist) => (res.send(gist)));
})

app.post('/gist/favorite', (req, res) => {
    const id = req.query.id;
    if (!id) {
        res.status(400).send('id parameter missing')
    }
    favoritesAPI.addFavorite(id)
        .then(res.sendStatus(200));
})

app.delete('/gist/favorite', (req, res) => {
    const id = req.query.id;
    if (!id) {
        res.status(400).send('id parameter missing')
    }
    favoritesAPI.removeFavorite(id)
        .then(res.sendStatus(200));
})

app.get('/gist/favorites', (req, res) => {
    favoritesAPI.getAllFavorites().then((result) => (res.send(result)))
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})