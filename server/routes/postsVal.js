const posts = require('./posts.js')
const validate = require('./validate.js')
const request = require('request')

const postsVal = (req, res, callback) => {
    urlinput = req.body.urlinput
    // check if url is valid through regex
    if (!validate.url(urlinput)) {
        res.status(200).send({
            message: `Your url is invalid!`
        })
        console.log(urlinput, 'is invalid!')
        return false
    } else {
        // check if the url actually exists (this doesn't seem to work if I move it
        // to validate.js, it gives undefined) request also checks if the certificate
        // matches the domain, if it's expired, and those will return error undefined
        request(urlinput, {method: 'HEAD', timeout: 1500}, (err, result) => {
            if (!err && result.statusCode === 200) {
                // console.log(result.headers)
                console.log(urlinput, 'statusCode:', result && result.statusCode, '\n')
                // calls for the rest of postsForm
                posts.form2(req, res)
            } else {
                error = err.code
                // console.log(err)
                console.log(urlinput, 'is invalid! statusCode:', result && result.statusCode, 'err.code:', error, '\n')
                res.status(200).send({
                    message: `Your url is invalid! <span style='color:red'>statusCode: ${result && result.statusCode} Error: ${error}</span>`
                })
                return false
            }
        })
    }
}

module.exports.form = postsVal
