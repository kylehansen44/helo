require ('dotenv').config()
const express = require('express')
const massive = require ('massive')
const session = require('express-session')

const app = express()
const { CONNECTION_STRING, SERVER_PORT, SESSION_SECRET } = process.env

app.use(express.json())

app.use(
    session({
        secret: SESSION_SECRET,
        resave: false,
        saveUninitialized: true,
        cookie: { maxAge: 1000 * 60 * 60 * 24 * 365 },
    })
)




massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false},

}).then((dbInstance) => {
    app.set('db', dbInstance)
    console.log("DB is connected")
    app.listen(SERVER_PORT, () =>
      console.log(`Listening on port ${SERVER_PORT}`)
    )
  })