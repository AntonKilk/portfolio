let express = require('express')
let { data } = require('data/data.json')
let app = express()
//path module ??
console.log('running...')
console.log()

app.set('view engine', 'pug')

app.use(express.static('public'))