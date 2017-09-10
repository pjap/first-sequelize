const express = require('express')
const route = express.Router()
const models = require('../models')

// READ DATA TABLE FROM MODULE TEACHER
route.get('/', function(req,res) {
  models.Teacher.findAll()
  .then(teachers => {
    res.redirect('students', {data: teachers, title: 'Halaman Teacher'})
  })
  .catch(err => {
    res.send(err)
  })
})


// CREATE DATA TABLE FROM MODULE TEACHERS
route.post('/', function(req,res) {
  models.Teacher.build({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    createdAt: new Date(),
    updatedAt: new Date()
  })
  .save()
  .then(teachers => {
    res.redirect('/students')
  })
})

// DELETE DATA TABLE FROM MODULE TEACHER
route.get('delete/id:', function(req,res) {
  models.Teacher.destroy({
    where: {
      id : req.params.id
    }
  })
  .then(teachers => {
    res.redirect('/teachers')
  })
})

// EDIT DATA TABLE FROM MODULE TEACHERS
route.get('/edit/:id', function(req,res){
  models.Teacher.findAll({
    where : {
      id : req.params.id
    }
  })
  .then(teachers => {
    res.render('teacheredit', {data: teachers[0], title: 'HALAMAN EDIT TEACHER!'})
  })
})

route.post('/edit/:id', function(req,res) {
  models.Teacher.update(
    {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email
    },
    {
      where: { id: req.params.id}
    }
  )
  .then(teachers =>
    res.redirect('/teachers')
  )
})


module.exports = route
