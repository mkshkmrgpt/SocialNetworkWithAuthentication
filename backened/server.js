var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
var mongoose = require('mongoose')


var app = express()
var User = require('./model/User.js')

app.use(cors())
app.use(bodyParser.json())

var posts = [
    {'message': 'hi'},
    {'message': 'hello'}
]
app.get('/posts',(req,res)=>{
    res.send(posts)
})

app.post('/register', (req,res)=>{

    var userData  = req.body
    var user = new User(userData)

    user.save((err,result)=>{
        if(err){
            console.log('Error creating user')
        }
    })
    res.sendStatus(200)
})

mongoose.connect('mongodb://test:test@ds257245.mlab.com:57245/social_network',{useMongoClient:true},(err)=>{
    if(!err){
        console.log('Connected to database')
    }
})

app.listen(3000)