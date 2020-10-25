const express = require('express')
const badyParser = require('body-parser')

const app = express()

app.use(badyParser.json())
app.use(badyParser.urlencoded({ extended: false }))

require('./controllers/authController')(app)

app.listen(3000)
