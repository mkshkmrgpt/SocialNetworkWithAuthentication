var User = require('./model/User.js')
var jwt = require('jwt-simple')

module.exports = {
    register: (req, res) => {

        var userData = req.body
        var user = new User(userData)
        console.log(user)

        user.save((err, result) => {
            if (err) {
                console.log('Error creating user')
            }
        })
        res.sendStatus(200)
    },
    login: async (req, res) => {
        var userData = req.body

        var user = await User.findOne({
            email: userData.email
        })

        if (!user) {
            res.send({ message: 'Email or password is invalid' }).sendStatus(401)
        }
        if (userData.password != user.password) {
            res.send({ message: 'Email or password is invalid' }).sendStatus(401)
        }

        var payload = {}
        var token = jwt.encode(payload, '123456')
        res.send({ token: token }).sendStatus(200)
    }
}