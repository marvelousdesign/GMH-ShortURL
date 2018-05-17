const base58 = require('./base58.js')
const validate = require('./validate.js')
const save = require('./save.js')
const db = require('./db.js')
const Url = db.Url
const baseUrl = db.baseUrl

// extention / second part of postForm
const postsForm = (req, res) => {
    urlinput = req.body.urlinput
    // check if url already exists in database
    Url.findOne({urlinput: urlinput}, (err, data) => {
        if (data) {
            // since it exists, we return it without creating a new entry
            res.status(200).send({
                message: 'The shorten url already exists at ',
                shortcode: data.shortcode,
                baseUrl: baseUrl
            })
            console.log(`The shorten url already exists at ${baseUrl}${data.shortcode}`)
       } else {
            // checks if the shortcode already exists
            shortcode = req.body.shortcode
            Url.findOne({shortcode: shortcode}, (err, data) => {
                if (data) {
                    res.status(200).send({
                        message: 'The shortcode already exists! Try again.',
                    })
                    return false
                } else {
                    // checks for any custom shortcode, returns random generated shorten url when there is none
                    // or returns shortcode is too short message, or returns your custom shorturl
                    if (shortcode.length === 0) {
                        let newCode = base58.gen()
                        res.status(201).send({
                            message: 'Your shorten url is ',
                            shortcode: newCode,
                            baseUrl: baseUrl
                        })
                        req.body.shortcode = newCode
                        save.url(req.body)
                    } else if (shortcode.length < 6) {
                        res.status(200).send({
                            message: 'Your shortcode is too short! You need at least six characters.'
                        })
                        return false
                    // test the shortcode for non letters and numbers
                    } else if (!validate.code(shortcode)) {
                        res.status(200).send({
                            message: 'Your shortcode can only contain letters and numbers! Try again.'
                        })
                        console.log(shortcode, 'is invalid!')
                        return false
                    } else {
                        save.url(req.body)
                        res.status(201).send({
                            message: 'Your shorten url is ',
                            shortcode: req.body.shortcode,
                            baseUrl: baseUrl
                        })
                    }
                }
            })
       }
   })
}

module.exports.form2 = postsForm
