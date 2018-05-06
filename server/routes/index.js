const base58 = require('./base58.js')

const database = []
let count = 0

module.exports = {
    sayHey(req,res) {
        res.status(200).send({ message: 'hey' })
    },
    postForm(req,res) {
        const baseUrl = 'http://localhost:3000/'
        // pushes to the temporary database's array like objects
        let pushUrl = () => {
            database.push({
                id: ++count,
                urlinput: req.body.urlinput,
                shortcode: req.body.shortcode
            })
        }
        // checks for any custom shortcode, returns random generated shorten url when there is none
        // or returns shortcode is too short message, or returns your custom shorturl
        if (req.body.shortcode.length === 0) {
            let newCode = base58.encode()
            res.status(200).send({
                message: `en url is <a href="${baseUrl}${newCode}"
                            target="_blank">${baseUrl}${newCode}</a>`,
                shortcode: newCode
            })
            req.body.shortcode = newCode
            pushUrl(req.body)
            console.log(database)
        } else if (req.body.shortcode.length < 6) {
            res.status(200).send({
                message: 'code is too short! You need at least six characters.'
            })
            return
        } else {
            pushUrl(req.body)
            res.status(200).send({
                message: `en url is <a href="${baseUrl}${req.body.shortcode}"
                            target="_blank">${baseUrl}${req.body.shortcode}</a>`,
                shortcode: req.body.shortcode
            })
            console.log(database)
        }
    },
    getUrl (req, res) {
        // iterates over the database and finds the shortcode that matches
        // then returns the urlinput and redirects to the long url
        const shortcode = req.path.substring(1)
        console.log(`Fetching the url from ${shortcode}`)
        let id = Object.keys(database)
        id.forEach((id) => {
            if (shortcode === database[id].shortcode) {
                let url = database[id].urlinput
                console.log(`Short code ${shortcode} refers to ${url}`)
                res.redirect(url)
            }
        })
    }
}
