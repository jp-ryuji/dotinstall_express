'use strict'

var express = require('express')
var logger = require('morgan')
var app = express()

app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')

// middleware
app.use(logger('dev'))
app.use(express.static(__dirname + '/public_html'))

app.route('/')
  .get(function(req, res) {
    res.render('index', { title: 'title from app.js' })
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
