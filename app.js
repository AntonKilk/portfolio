let createError = require('http-errors')
let express = require('express')
let app = express()
let path = require('path')
//for Heroku deployment
app.listen(process.env.PORT);

app.use('/static', express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

let indexRoute = require('./routes/index')
app.use(indexRoute)

let aboutRoute = require('./routes/about')
app.use(aboutRoute)

let projectRoute = require('./routes/project')
app.use(projectRoute)

// Catch 404 and forward to error handler
app.use((req, res, next) => {
    next(createError(404))
})

//Error handler
app.use((err, req, res, next) => { 
    res.locals.message = err.message
    res.locals.error = err
    res.status(err.status || 500)
    res.render('error')
    console.log(err.status)
    console.log(err.message)
    console.log(err.stack)
})

app.listen(3000, () => {
    console.log('The application is running on port 3000')
})