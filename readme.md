# cUrl on windows
## Setup
https://stackoverflow.com/questions/25044010/running-curl-on-64-bit-windows

## Example commands
### Create A Todo
curl -X POST http://localhost:9001/api/todo -d "name=todo application POST&description=complete this todo application's POST route&deadline=2018-12-20&tags=task, cn, job"

### Fetch List Of Todos
cUrl -X GET http://localhost:9001/api/todo

### Delete A Todo
cUrl -X DELETE http://localhost:9001/api/todo/5c153a3f3953ff0790c5cc9e
