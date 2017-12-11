var User = require('./model/User.js')
var jwt = require('jwt-simple')
var bcrypt = require('bcrypt-nodejs')
var express = require('express')
var router = express.Router()

router.post('/register', (req, res) => {

        var userData = req.body
        var newUser = new User(userData)
        console.log(user)

        user.save((err, newUser) => {
            if (err) {
                return res.status(500).send({message:'Error saving user'})  
            }
        })
        createSendResponse(res,user)
    })
    
 router.post('/login', async (req, res) => {
        var loginData = req.body
        var user = await User.findOne({
            email: loginData.email
        })

        if (!user) {
            res.send({ message: 'Email or password is invalid' }).sendStatus(401)
        }

        bcrypt.compare(loginData.password,user.password,(err,isMatch)=>{
            if(!isMatch){
                res.send({message:'Email or password is invalid'}).sendStatus(401)
            }
        })
        createSendResponse(res,user)
    })

function createSendResponse(res, user) {
        var payload = {sub:user._id}
        var token = jwt.encode(payload, '123456')
        res.send({ token: token }).sendStatus(200)
}
var auth = {
    router,
    checkAuthorization : (req, res, next) =>{
    if(!req.header('authorization'))
        return res.status(401).send({message:'Unathorized missing auth token'})
    var token = req.header('authorization').split(' ')[1]
    
    var payload = jwt.decode(token,'123456')
    if(!payload)
        return res.status(401).send({message:'Unauthorized access. Invalid auth token'})

    req.userId = payload.sub
    next() 
    }
}       
module.exports = auth