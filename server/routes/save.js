const db = require('./db.js')
const Url = db.Url

const saveUrl = (data) => {
    // saves the data to mongodb
    data.date_created = new Date()
    const url = new Url(data)
    url.save((err, model) =>  {
        if (err) {
            return console.error(err)
        }
        console.log(model, 'saved!!!')
    })
}

module.exports.url = saveUrl
