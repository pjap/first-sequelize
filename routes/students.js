const express = require('express')
const route = express.Router()
const models = require('../models')

// READ DATA TABLE FROM MODULE STUDENTS
route.get('/', function(req,res) {
  models.Student.findAll()
  .then(students => {
    res.render('students', {data: students, title: 'Halaman Students!!'})
  })
  .catch(err => {
    res.send(err)
  })
})

// CREATE DATA TABLE FROM MODULE CONTACTS
route.post('/', function(req,res) {
  models.Student.build({
    first_name : req.body.first_name,
    last_name : req.body.last_name,
    email : req.body.email,
    createdAt : new Date(),
    updatedAt : new Date()
  })
  .save()
  .then(students => {
    res.redirect('/students')
  })
})

// DELETE DATA TABLE FROM MODULE CONTACTS
route.get('/delete/:id', function(req,res) {
  models.Student.destroy({
    where: {
      id : req.params.id
    }
  })
.then(students => {
  res.redirect('/students')
  })
})

// EDIT DATA TABLE FROM MODULE STUDENTS
route.get('/edit/:id', function (req,res) {
  models.Student.findAll( {
    where: {
      id : req.params.id
    }
  })
  .then(students => {
    res.render('studentsedit', {data: students[0], title: ' HALAMAN EDIT CONTACTS!!'})
  })
})

route.post('/edit/:id', function(req,res) {
  models.Student.update(
    {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email
    },
    { where: { id: req.params.id } }
  )
  .then(students =>
    res.redirect('/students')
  )
})

module.exports = route
