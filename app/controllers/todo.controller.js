const Todo = require('../models/todo.model')

exports.create = (request, response, next) => {
    let todo = new Todo({
        name: request.body.name,
        description: request.body.description,
        created: new Date(),
        deadline: new Date(request.body.deadline),
        tags: request.body.tags
    })

    todo.save((error) => {
        if (error) {
            return next(error)
        }
        response.json({message: 'requested todo saved successfully.', todo: todo})
    })
}