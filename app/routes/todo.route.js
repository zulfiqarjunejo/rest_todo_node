let router = require('express').Router()
const controller = require('../controllers/todo.controller')

router.get('/todo', controller.list)
router.post('/todo', controller.create)

module.exports = router