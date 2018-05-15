const base58 = require('./base58.js')
const mongoose = require('mongoose')
const models = require('../models')

const Url = mongoose.model('Url', models.Url)
const baseUrl = 'https://gmshortener.herokuapp.com/' // 'http://localhost:3000'
const pushUrl = (data) => {
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

const validateUrl = (url) => {
    const regex = /^(?:ht|f)tps?:\/\/(([a-zA-Z0-9$\-_.+!*'(),;:&=]|%[0-9a-fA-F]{2})+@)?(((25[0-5]|2[0-4][0-9]|[0-1][0-9][0-9]|[1-9][0-9]|[0-9])(\.(25[0-5]|2[0-4][0-9]|[0-1][0-9][0-9]|[1-9][0-9]|[0-9])){3})|localhost|([a-zA-Z0-9\-\u00C0-\u017F]+\.)+([a-zA-Z]{2,}))(:[0-9]+)?(\/(([a-zA-Z0-9$\-_.+!*'(),;:@&=]|%[0-9a-fA-F]{2})*(\/([a-zA-Z0-9$\-_.+!*'(),;:@&=]|%[0-9a-fA-F]{2})*)*)?(\?([a-zA-Z0-9$\-_.+!*'(),;:@&=\/?]|%[0-9a-fA-F]{2})*)?(\#([a-zA-Z0-9$\-_.+!*'(),;:@&=\/?]|%[0-9a-fA-F]{2})*)?)?$/
    return regex.test(url)
}

module.exports = {
    sayHey(req,res) {
        res.status(200).send({ message: 'hey' })
    },
    postForm(req,res) {
        urlinput = req.body.urlinput
        // check if url is valid
        if (!validateUrl(urlinput)) {
            res.status(200).send({
                message: `Your url is a invalid url!`,
            })
            console.log(urlinput, 'is invalid!')
            return false
        } else {
            // check if url already exists in database
            Url.findOne({urlinput: urlinput}, (err, data) => {
                if (data) {
                    // since it exists, we return it without creating a new entry
                    res.status(200).send({
                        message: `Your shorten url is <a href="${baseUrl}${data.shortcode}" target="_blank">${baseUrl}${data.shortcode}</a>`,
                        shortcode: data.shortcode
                    })
                } else {
                    // checks if the shortcode already exists
                    shortcode = req.body.shortcode
                    Url.findOne({shortcode: shortcode}, (err, data) => {
                        if (data) {
                            res.status(200).send({
                                message: `The shortcode already exists! Try again.`,
                            })
                        } else {
                            // checks for any custom shortcode, returns random generated shorten url when there is none
                            // or returns shortcode is too short message, or returns your custom shorturl
                            if (req.body.shortcode.length === 0) {
                                let newCode = base58.generate()
                                res.status(200).send({
                                    message: `Your shorten url is <a href="${baseUrl}${newCode}" target="_blank">${baseUrl}${newCode}</a>`,
                                    shortcode: newCode
                                })
                                req.body.shortcode = newCode
                                pushUrl(req.body)
                                console.log(req.body)
                            } else if (req.body.shortcode.length < 6) {
                                res.status(200).send({
                                    message: 'Your short code is too short! You need at least six characters.'
                                })
                                return
                            } else {
                                pushUrl(req.body)
                                res.status(200).send({
                                    message: `Your shorten url is <a href="${baseUrl}${req.body.shortcode}" target="_blank">${baseUrl}${req.body.shortcode}</a>`,
                                    shortcode: req.body.shortcode
                                })
                                console.log(req.body)
                            }
                        }
                    })
                }
            })
        }
    },
    getUrl (req, res) {
        // finds the shortcode in the database and redirects to the long url
        shortcode = req.path.substring(1)
        console.log(`Fetching the url from ${baseUrl}${shortcode}`)
        Url.findOne({shortcode: shortcode}, (err, data) => {
            if (data) {
                console.log('Entry found in the database')
                res.redirect(data.urlinput)
            } else {
                res.redirect('/')
            }
        })
    }
}
