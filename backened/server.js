var express = require('express')
var mongoose = require('mongoose')
var bodyParser = require('body-parser')
var cors = require('cors')
var auth = require('./auth.js')

var User = require('./model/User.js')
var Post = require('./model/Post.js')

mongoose.Promise = Promise

var app = express()

app.use(cors())
app.use(bodyParser.json())


app.get('/posts/:id', async (req, res) => {
    try {
        var author = req.params.id
        var posts = await Post.find({author})
        return res.send(posts)
    } catch (error) {
        console.log(error)
        return res.sendStatus(500)
    }
})

app.post('/post', (req, res) => {
    var postData = req.body
    postData.author = '5a0ffc73f54d202ef811389d'
    var post = new Post(postData)

    post.save((err, result) => {
        if (err) {
            console.log('error creating post')
        }
    })
    res.sendStatus(200)
})

app.post('/register', auth.register)

app.post('/login', auth.login)

app.get('/users', async (req, res) => {
    try {
        var users = await User.find({}, '-password -__v')
        res.send(users)

    } catch (error) {
        console.log(error)
        res.send(500)
    }
})

app.get('/profile/:id', async (req, res) => {
    try {
        var user = await User.findById(req.params.id, '-password -__v')
        res.send(user)
    } catch (error) {
        console.log(error)
        res.send(500)
    }
})

mongoose.connect('mongodb://test:test@ds257245.mlab.com:57245/social_network', { useMongoClient: true }, (err) => {
    if (!err) {
        console.log('Connected to database')
    }
})

app.listen(3000)