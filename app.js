'use strict'

var express = require('express')
var app = express()

app.route('/')
  .get(function(req, res) {
    res.send('hello world!')
})

app.route('/users/:name')
  .get(function(req, res) {
    res.send('hello, ' + req.params.name)
})

app.listen(3000)
console.log('server starting...')
