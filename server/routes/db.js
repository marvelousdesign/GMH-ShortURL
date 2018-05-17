// this module exists so we don't have to require mongoose & models all the time.
const mongoose = require('mongoose')
const models = require('../models')

module.exports.Url = mongoose.model('Url', models.Url)
module.exports.baseUrl = process.env.BASE_URI
// to test locally replace BASE_URI with LOCALHOST
// or if you don't have a .env hardcode:
// 'https://gmshortener.herokuapp.com/' or 'http://localhost:3000/'
