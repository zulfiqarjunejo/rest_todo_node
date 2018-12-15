let app = require('express')()
let bodyParser = require('body-parser')

/**
 * Import routes
 */

let defaultRouter = require('./app/routes/default')

/**
 * Set up app
 */

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

let port = process.env.port || 9001

app.use('/', defaultRouter)
app.listen(port, () => {
    console.log('Todo server spun on: ' + port)
})