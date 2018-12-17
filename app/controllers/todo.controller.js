const Todo = require('../models/todo.model')

exports.view = (request, response) => {
    Todo.findById(request.params.id, (error, todo) => {
        if (error) {
            response.json({message: 'an error occured when fetching the required todo', error: error})
        }

        if (!todo) {
            response.json({
                error: 'TodoNotFound',
                message: 'todo with id ' + request.params.id + ' not found.'
            })
        } else {
            response.json(todo)
        }
    }).select('-__v')
}

exports.list = (request, response) => {
    Todo.find({}, (error, todos) => {
        if (error) {
            response.json({error: 'ISE', message: 'an error occured while fetching list of todos', error: error})
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

exports.delete = (request, response) => {
    Todo
        .findById(request.params.id)
        .remove((error) => {
            if (error) {
                response.json({message: 'an error occured while deleting the todo', error: error})
            }

            response.json({
                message: 'todo with id ' + request.params.id + ' deleted successfully.'
            })
        })
}