let router = require('express').Router()
const controller = require('../controllers/todo.controller')

router.get('/todo', (request, response) => {})
router.post('/todo', controller.create)

module.exports = router