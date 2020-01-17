let express = require('express')
let router = express.Router()
let { projects } = require('../data/data.json')

router.get('/project/:id', (req, res) => {
    let  projectId  = req.params.id

    let project = projects.find( ({ id }) => id == + projectId)

    if (project) {
        res.render('project', { project })
    } else {
        return res.redirect('/error')
    }
})

module.exports = router