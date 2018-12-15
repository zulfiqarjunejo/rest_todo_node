let router = require('express').Router()
router.get('/', (request, response) => {
    response.json({message: '\'tis a default route!'})
})

module.exports = router