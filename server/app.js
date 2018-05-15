const dotenv = require('dotenv').config()
const express = require('express')
const errorhandler = require('errorhandler')
const logger = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const routes = require('./routes')
const path = require('path')
const mongodb = require('mongodb')
const mongoose = require('mongoose')

const app = express()

// create the database connection
mongoose.connect(process.env.MONGOLAB_URI)
mongoose.Promise = global.Promise
const db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error'))

// Middleware: Does stuff to the request and response objects before routing:
app.use(bodyParser.json()) // handles JSON bodies
app.use(bodyParser.urlencoded({ extended: true })) // handles URL encoded bodies
app.use(logger('dev'))
app.use(errorhandler())
app.use(cors())

app.use(express.static(path.join(__dirname, '../client/')))
app.get('/', (req, res) => {
    // route to serve up the homepage (index.html)
    res.sendFile(path.join(__dirname, '../client/index.html'));
})
app.get('/hey', routes.sayHey)
app.post('/', routes.postForm)
app.get('/:shortcode', routes.getUrl)

const port = process.env.PORT || 3000
app.listen(port)
console.log('Server is listening on port', port)
