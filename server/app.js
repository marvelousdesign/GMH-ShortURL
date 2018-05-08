const express = require('express')
const errorhandler = require('errorhandler')
const logger = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const routes = require('./routes')
const path = require('path')
const mongodb = require('mongodb')
const mongoose = require('mongoose')
let mongoDB = 'url_database'

const app = express()

// create the database connection
const DATABASE_NAME = 'url_database'
const MONGODB_URI = 'mongodb://localhost:27017/' + DATABASE_NAME
mongoose.connect(MONGODB_URI)
mongoose.Promise = global.Promise
const db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error'))

// Middleware: Does stuff to the request and response objects
// before routing:
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(logger('dev'))
app.use(errorhandler())
app.use(cors())

app.get('', routes.sayHey)
app.post('', routes.postForm)
app.get('/:shortcode', routes.getUrl)

const server = app.listen(3000, () => {
    const port = server.address().port
    console.log('Server is listening on port', port)
})
