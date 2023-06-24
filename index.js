//Dependenices
const express = require('express')
const app = express()
const methodOverride = require('method-override')
const mongoose = require('mongoose')

//Config
require('dotenv').config()



//Middleware
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'));

// Controllers & Routes
app.use('/places', require('./controllers/places'))


//Routes
app.get('/', (req, res) => {
  res.render('home')
})

const PORT = process.env.PORT || 3003
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true},
    () => {console.log('connected to : ', process.env.MONGO_URI)})

//404 Page
    app.get('*', (req, res) => {
  res.render('error404')
})

//Listen
app.listen(process.env.PORT)