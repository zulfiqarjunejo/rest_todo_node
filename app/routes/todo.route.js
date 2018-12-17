let router = require('express').Router()
const controller = require('../controllers/todo.controller')

/**
 * @api {get} todo/ List all todos
 * @apiName List Todos
 * @apiGroup Todo
 *
 * @apiSuccess {List} list Comprehensive list of all todos (each element in the list contains id and name of todo).
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "_id": "UUID of the corresponding todo",
 *       "name": "Name of the todo",
 *     }
 *
 * @apiError TodoNotFound The required Todo with specific id not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 200 Not Found
 *     {
 *       "error": "ISE",
 *       "message": "an error occured while fetching list of todos"
 *     }
 */
router.get('/todo', controller.list)

/**
 * @api {get} todo/:id View a specific todo
 * @apiName Get Todo
 * @apiGroup Todo
 *
 * @apiParam {String} id UUID of todo.
 *
 * @apiSuccess {String} name Name of the Todo.
 * @apiSuccess {String} description Description of the Todo.
 * @apiSuccess {Date} created Creation date of the Todo.
 * @apiSuccess {String} deadline Deadline date of the Todo.
 * @apiSuccess {List} tags List of tags of the Todo.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "name": "Machine Learning I Assignment 05",
 *       "description": "Complete assignment 05 of machine learning course",
 *       "created": "2018-12-17",
 *       "deadline": "2019-01-05",
 *       "tags": "assignment, ML, important"
 *     }
 *
 * @apiError TodoNotFound The required Todo with specific id not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 200 Not Found
 *     {
 *       "error": "TodoNotFound",
 *       "message": "todo with id _de8800xace3c not found"
 *     }
 */
router.get('/todo/:id', controller.view)

/**
 * @api {post} todo/ Create a new todo
 * @apiName Create Todo
 * @apiGroup Todo
 *
 * @apiParam {String} name Name of the Todo.
 * @apiParam {String} description Description of the Todo.
 * @apiParam {String} deadline Deadline date of the Todo.
 * @apiParam {List} tags List of tags of the Todo.
 *
 * @apiSuccess {String} message Message which indicates if new todo is created or not
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "message": "requested todo saved successfully",
 *     }
 *
 * @apiError {String} message Message which indicates if new todo is created or not
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 200 Not Found
 *     {
 *       "message": "requested todo not saved"
 *     }
 */
router.post('/todo', controller.create)

/**
 * @api {delete} todo/:id Delete a specific todo
 * @apiName Delete Todo
 * @apiGroup Todo
 *
 * @apiParam {String} id UUID of todo.
 *
 * @apiSuccess {String} message Message which indicates that specified todo is deleted.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "message": "todo with id _de8800xace3c deleted successfully",
 *     }
 *
 * @apiError {ISE} Internal Server Error.
 * @apiError {String} message Message which represents further information
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 200 Not Found
 *     {
 *       "error": "ISE",
 *       "message": "an error occured while deleting the todo"
 *     }
 */
router.delete('/todo/:id', controller.delete)

module.exports = router