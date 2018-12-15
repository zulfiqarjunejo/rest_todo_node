const Todo = require('../models/todo.model')

exports.list = (request, response) => {
    Todo.find({}, (error, todos) => {
        if (error) {
            response.json({message: 'an error occured while fetching list of todos', error: error})
        }

        response.json(todos)
    }).select('name')
}

exports.create = (request, response) => {
    let todo = new Todo({
        name: request.body.name,
        description: request.body.description,
        created: new Date(),
        deadline: new Date(request.body.deadline),
        tags: request.body.tags
    })

    todo.save((error) => {
        if (error) {
            response.json({message: 'requested todo not saved.', error: error})
        }
        response.json({message: 'requested todo saved successfully.', todo: todo})
    })
}