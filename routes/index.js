let express = require('express')
let router = express.Router()
let { projects } = require('../data/data.json')



router.get('/', (req, res) => {
    res.render('index', { projects })
})

module.exports = router