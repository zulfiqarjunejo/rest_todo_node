const mongoose = require('mongoose')
const Schema = mongoose.Schema

let TodoSchema = new Schema({
    name: {
        type: String,
        required: true,
        max: 100
    },
    description: {
        type: String,
        required: false
    },
    created: {
        type: Date,
        required: true
    },
    deadline: {
        type: Date,
        required: false
    },
    tags: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Todo', TodoSchema)