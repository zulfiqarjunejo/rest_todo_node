# RESTful API for todo app

## Useful link
* https://codeburst.io/writing-a-crud-app-with-node-js-and-mongodb-e0827cbbdafb
* https://stackoverflow.com/questions/25044010/running-curl-on-64-bit-windows
* http://apidocjs.com/#getting-started

## Example commands in curl
### Create A Todo
curl -X POST http://localhost:9001/api/todo -d "name=todo application POST&description=complete this todo application's POST route&deadline=2018-12-20&tags=task, cn, job"

### Fetch List Of Todos
cUrl -X GET http://localhost:9001/api/todo

### Delete A Todo
cUrl -X DELETE http://localhost:9001/api/todo/5c153a3f3953ff0790c5cc9e

## Further Learning
I have identified few areas in this project which should be improved for learning purpose. Although it can be a extensive list, following are some which I personally want to learn:
* [Microsoft REST API Guidelines](https://github.com/Microsoft/api-guidelines/blob/vNext/Guidelines.md)
* [Consistent Error Codes according to "Microsoft REST API Guidelines"](https://github.com/Microsoft/api-guidelines/blob/vNext/Guidelines.md)