const mongoose = require('mongoose')

//Define a schema
// Schema is like the structural style guide to your database
// "Each schema maps to a MongoDB collection and defines the shape of the documents within that collection." - http://mongoosejs.com/docs/guide.html
const UrlSchema = new mongoose.Schema({
    urlinput: String,
    shortcode: String,
    date_created: Date
})

module.exports = mongoose.model('Url', UrlSchema)
