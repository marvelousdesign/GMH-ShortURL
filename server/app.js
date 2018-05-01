const express = require('express')
const errorhandler = require('errorhandler')
const logger = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')
const app = express()

//Middle-ware for everything below//
app.use(bodyParser.json())
app.use(logger('dev'))
app.use(errorhandler())
app.use(cors())
app.use('/', express.static(__dirname + '/'))


// app.get('/', function(req, res){
//   // route to serve up the homepage (index.html)
//   res.sendFile('index.html', {root: path.join(__dirname + './assets')})
// })

app.get('/', (req, res) => {
    // route to serve up the homepage (index.html)
    //  app.use((req, res, next) => {
//     // console.log('This statement gets executed before we return the store')
//     req = store
//     next()
// }),

    res.setHeader("Content-Type", "text/html")
    res.status(200).send("hi there")
    console.log(res.headersSent) // false
    res.send('OK')
    console.log(res.headersSent) // true
})

app.post('/', (req, res) => {
    // route to create and return a shortened URL given a long URL
    //   resp.sendFile('index.html', {root: path.join(__dirname + './assets')})
    res.status(201).send(req.body)
    console.log(req.params)
    console.log(req.body)
    return res.json(
        Object.assign({}, req.body, req.params)
    )
})

const server = app.listen(3000, () => {
    const port = server.address().port
    console.log('Server is listening on port', port)
})


// // require and instantiate express
// const express = require('express')
// const errorhandler = require('errorhandler')
// const logger = require('morgan')
// const bodyParser = require('body-parser')
// const cors = require('cors')
// const path = require('path')
// const routes = require('./routes')
// const router = express.Router();


// let store = {
//     posts: [{
//         name: '',
//         url: 'https://www.youtube.com/',
//         imageURL: '',
//         text: '',

//     }]
// }

// let app = express()

// //Middle-ware for everything below//
// app.use(bodyParser.json(store))
// app.use(logger('dev'))
// app.use(errorhandler())
// app.use(cors())
// app.use((req, res, next) => {
//     // console.log('This statement gets executed before we return the store')
//     req = store
//     next()
// }),

// app.get('./posts' , (routes.posts.getPosts), (req, res) => {
//     // route to serve up the homepage (index.html)
//     // res.sendFile('index.html', {root: path.join(__dirname + './assets')})
    
//     res.setHeader("Content-Type", "text/html")
//     res.status(200).send("hi there")
//     console.log(res.headersSent) // false
//     res.send('OK')
//     console.log(res.headersSent) // true
// })




// app.post('./posts', (req, res) => {
//     // route to create and return a shortened URL given a long URL
//     //   resp.sendFile('index.html', {root: path.join(__dirname + './assets')})
//     res.status(201).send(req.body)
//     console.log(req.params)
//     console.log(req.body.urlinput)
//     return res.json(
//         Object.assign({}, req.body, req.params)
//     )
// })

// const server = app.listen(3000, () => {
//     const port = server.address().port
//     console.log('Server is listening on port', port)
// })
// function newFunction(res) {
//     res.setHeader(name, value);
// }

