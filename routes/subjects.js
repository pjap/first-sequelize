const express = require('express')
const route = express.Router()
const models = require('../models')

// READ DATA TABLE FROM MODULE TEACHER
route.get('/', function(req,res) {
  models.Subject.findAll()
  .then(subjects => {
    res.render('subjects', {data: subjects, title: 'Halaman Subjects'})
  })
  .catch(err => {
    res.send(err)
  })
})

module.exports = route
