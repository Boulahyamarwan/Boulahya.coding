const bcrypt = require('bcrypt')
const passport = require('passport')

const initialisePassport = require('../passport-config.js')
initialisePassport(passport, email=>users.find(user => user.email === email), id => users.find(user => user.id === id))

let users = [];

const getRoot = (req, res) => {
    res.render('index.ejs')
}

const getRegister = (req, res) => {
    res.render("register.ejs")
}

const getLogin = (req, res) => {
    res.render('login.ejs')
}

const postRegister = (req, res) => {
    bcrypt.hash(req.body.password, 10)
    .then((result) => {
        users.push({
            id: Date.now().toString(),
            name: req.body.name,
            email: req.body.email,
            password: result
        })
        res.redirect('/login')
    })
    .catch((err) => {
        throw err;
    })
}


const postLogout = (req, res) => {
    req.logOut((err) => {
        if(!err) {
            res.redirect('/login')
        } else {
            throw err;
        }
    })
}

module.exports = { getRoot, getRegister, getLogin, postRegister, postLogout }