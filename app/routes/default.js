let express = require('express');

let router = express.Router();
router.get('/', (request, response) => {
    response.json({message: '\'tis a default route!'})
})

module.exports = router