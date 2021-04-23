const gistAPI = require('./utils/gist-api')
const express = require('express')

const app = express()

// const publicDirectoryPath = path.join(__dirname, '../public')
// console.log(publicDirectoryPath)
// app.use(express.static(publicDirectoryPath))

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

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})