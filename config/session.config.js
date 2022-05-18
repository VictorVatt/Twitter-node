const  app  = require("../app")
const session = require('express-session')
const MongoStore = require('connect-mongo')
const mongoose = require('mongoose')

app.use(session({
    secret: 'je suis un secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: false,
        maxAge: 1000 * 60 * 60 * 24 * 14, 
    },
    store: MongoStore.create({
        mongoUrl: "mongodb+srv://vatt:QygiI3r0mPHpKCqF@cluster0.4yn1d.mongodb.net/Twitter?retryWrites=true&w=majority",
        ttl: 60 * 60 * 24 * 14
    })
}))