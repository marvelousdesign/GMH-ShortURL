# GMH-ShortURL

This application takes long URLs and shortens them. It was built from scratch with Javascript, Node.js, Express and Mongodb.

Team members included Gabriel, Mary, Hannah, and Alexandra.


# Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

# Prerequisites

Run git clone to clone this repo.
```
git clone https://github.com/marvelousdesign/GMH-ShortURL.git
```

Ensure that node modules are installed in your new project folder. Use ‘npm ci’ it will remove existing node_modules/ if they exists, then installs the exact versions.

```
npm ci
```
You should have body-parser, cors, dotenv, errorhandler, express, mongodb, mongoose, morgan, path, request, and its dependencies.

# Running the node server

If you are in the root of the git repo: To start app, type in your terminal 'node server/app.js' and the app will show that it’s listening on port 3000 in your terminal.
```
node server/app.js
```

Go to http://localhost:3000 in your browser, and it will display the client/index.html.

# Testing out the app

To test it out locally, you'll have to switch out const variables in client/createPost.js, client/getPosts.js, and the process environment variables in server/routes/db.js.

Test out the app by saving multiple long urls to see if the validation will accept it, and if it'll accept your custom short code.

Then test out the shorturl, if it redirects correctly, else it sends you to the 404 page on shorturl that doesn't exist yet.

# Deployment

If deploying to Heroku, register for a Heroku account and go through their tutorial up to Provision add-ons.

- Create a new app on dashboard.heroku.com/apps, then name your app (optional).
- Connect it to your existing git via Heroku CLI (set that up if you haven't already).

```
heroku git:remote -a randomnonsense
```

- Connect the app with Github, and you can setup automatic deploy or deploy manually on: dashboard.heroku.com/apps/randomnonsense/deploy/github
- randomnonsense will be whatever you named your app or a random name heroku gave your app's link.
- Best to manually deploy after Master has been merge with your working branch. So you don't have to deal with heroku being ahead of your master branch on github, and uncommitting then committing changes.
- You can see the tail of the logs by using 'heroku logs --tail' in your terminal.

```
heroku logs --tail
```

Register for a Mongo Lab (mLab) account, create a new MongoDB Deployment, and pick a Cloud Provider between AWS, Google Cloud, MS Azure. Pick Sandbox, pick a server that is closest to you, name the database, and it's created. Then add a database user. (The database user doesn't have admin rights on mongo shell)

This way, you don't have to tie your Credit Card to your Heroku acc. They will give you a link like so and you can put it into your .env.
```
MONGOLAB_URI='mongodb://dbuser:dbpassword@ab112345.mlab.com:12345/database'
```

Also add these to your .env (see example.env).
```
BASE_URI='https://randomnonsense.herokuapp.com/'
LOCALHOST='http://localhost:3000/'
```

You can use 'heroku config:set' to connect mLab to Heroku via terminal.
```
heroku config:set MONGOLAB_URI='mongodb://dbuser:dbpassword@ab112345.mlab.com:12345/database'
```

After you deploy it to heroku, you can use 'heroku open' on your terminal to open the webpage on your browser.
```
heroku open
```
Simlarly you can use 'heroku local' it will fire up node with the web.1 dyno process.
```
heroku local
```
Then go to http://localhost:5000 on your browser. You'll see the last state of when you deploy it to heroku.
