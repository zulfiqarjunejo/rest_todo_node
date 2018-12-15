let router = require('express').Router()
const controller = require('../controllers/todo.controller')

router.get('/todo', controller.list)
router.get('/todo/:id', controller.view)
router.post('/todo', controller.create)
router.delete('/todo/:id', controller.delete)

module.exports = router