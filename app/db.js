let firebase = require('firebase')
let config = require('./configs/firebase')
firebase.initializeApp(config)

module.exports = firebase.database()