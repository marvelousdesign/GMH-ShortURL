const db = require('./db.js')
const Url = db.Url
const baseUrl = db.baseUrl

module.exports = {
    sayHey(req,res) {
        res.status(200).send({ message: 'hey' })
    },
    posts: require('./posts.js'),

    // finds the shortcode in the database and redirects to the long url
    getUrl(req, res) {
        shortcode = req.path.substring(1)
        console.log(`Fetching the url from ${baseUrl}${shortcode}`)
        Url.findOne({shortcode: shortcode}, (err, data) => {
            if (data) {
                console.log(`Entry is found in the database and redirecting to ${baseUrl}${shortcode}`)
                res.redirect(302, data.urlinput)
            } else {
                res.status(404).redirect('/404.html')
            }
        })
    }
}
