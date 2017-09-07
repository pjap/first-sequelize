const express = require('express')
const route = express.Router()
const models = require('../models')

// READ DATA TABLE FROM MODULE TEACHER
route.get('/', function(req,res) {
  models.Teacher.findAll()
  .then(teachers => {
    res.render('teachers', {data: teachers, title: 'Halaman Teacher'})
  })
  .catch(err => {
    res.send(err)
  })
})

module.exports = route
