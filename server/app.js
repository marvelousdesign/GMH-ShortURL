const express = require('express')
const errorhandler = require('errorhandler')
const logger = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const routes = require('./routes')
const path = require('path')



let store = {
    posts: [{
        name: 'What is going on right now in this EdX course?',
        url: 'https://courses.edx.org/courses/course-v1:Microsoft+DEV283x+2T2017/course/',
        text: 'As we have already discussed, this course is a little advanced and some of the language and concepts are glossed over because the teacher already assumes basic fluency with server-side programming. That is OK. You will still learn a ton, even if you don\'t understand everything. You are learning to use developer documentation and resources, and we will go over the jargon and concepts in class.',
        
    }]
}

let app = express()

// Middleware: Does stuff to the request and response objects
// before routing:
app.use(bodyParser.json())
app.use(logger('dev'))
app.use(errorhandler())
app.use(cors())

    app.get('', routes.sayHey)
    app.post('', routes.postForm )
    

    const server = app.listen(3000, () => {
        const port = server.address().port
        console.log('Server is listening on port', port)
    })
    