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

app.route('/items/:id([0-9]+)')
  .get(function(req, res) {
    res.send('item no: ' + req.params.id)
})

app.route('/hello.txt')
  .get(function(req, res) {
    res.sendFile(__dirname + '/public_html/hello.txt')
})


app.listen(3000)
console.log('server starting...')
