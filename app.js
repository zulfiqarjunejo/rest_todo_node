let app = require('express')()
let bodyParser = require('body-parser')
const mongoose = require('mongoose');

let db_url = 'mongodb://admin:admin123@ds135704.mlab.com:35704/todo_rest_node'
let mongoDB = process.env.MONGODB_URI || db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

/**
 * Import routes
 */

let todoRouter = require('./app/routes/todo.route')
let defaultRouter = require('./app/routes/default')

/**
 * Set up app
 */

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

let port = process.env.port || 9001

app.use('/api', todoRouter)
app.use('/', defaultRouter)

app.listen(port, () => {
    console.log('Server running on port: ', port)
})