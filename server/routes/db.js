// this module exists so we don't have to require mongoose & models all the time.
const mongoose = require('mongoose')
const models = require('../models')

module.exports.Url = mongoose.model('Url', models.Url)
module.exports.baseUrl = 'https://gmshortener.herokuapp.com/' // 'http://localhost:3000/'
