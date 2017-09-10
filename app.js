const express = require('express')
const app = express()
const bodyParser = require('body-parser')

// set view engine
app.set('view engine', 'ejs');

// set body parser json
app.use(bodyParser.urlencoded({ extended : true}))
app.use(bodyParser.json())

// Calling Routes To APP
let index = require('./routes/index.js')
let teachers = require('./routes/teachers.js')
let subjects = require('./routes/subjects.js')
let students = require('./routes/students.js')

app.use('/', index)
app.use('/teachers', teachers)
app.use('/subjects', subjects)
app.use('/students', students)

// ROUTE LOCALHOST:3000
app.listen(3000, function() {
  console.log('Using Port 3000!');
})
