const base58 = require('./base58.js')

const database = []

module.exports = {
    sayHey(req,res) {
        res.status(200).send({ message: 'hey' })
    },
    postForm(req,res) {
        let pushUrl = () => {
            database.push(req.body)
        }
        if (req.body.shortcode.length === 0) {
            pushUrl()
            newCode = base58.encode()
            res.status(200).send({ message: newCode })
            req.body.shortcode = newCode
            console.log(database)
        } else if (req.body.shortcode.length < 6) {
            res.status(200).send({
                message: 'too short! You need atleast six characters.'
            })
            return
        } else {
            pushUrl()
            res.status(200).send({ message: req.body.shortcode })
            console.log(database)
        }
    }
}
