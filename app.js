'use strict'

var express = require('express')
var app = express()

app.route('/')
  .get(function(req, res) {
    res.send('hello world!')
})

app.route('/users/:name?')
  .get(function(req, res) {
    if (req.params.name) {
      res.send('hello, ' + req.params.name)
    } else {
      res.send('hello, nobody')
    }
})

app.listen(3000)
console.log('server starting...')
