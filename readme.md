# REST API for example TODO application
This project is a demo project that is created to complete task for a job process.

## Installation
1. [Install Node.JS on Windows.](https://treehouse.github.io/installation-guides/windows/node-windows.html)
2. Open a command shell (such as CMD/PowerShell on Windows) and execute command `npm install`. This step will install all the dependencies using node package manager (npm).
3. Make sure that port `9001` is not currently used by another application. If desired, change the port in file `app.js`.
4. Execute command `npm start` to spin the server up.

## Database
I have hosted the MongoDB database on mLab's free tier. If desired, change the db_url variable in file `app.js`.

## Documentation
Please click [here](docs/index.html) to visit docs.

## Demo
I have compiled a list of demo commands that one can use to test this server.

1. Create New Todo
`curl -X POST http://localhost:9001/api/todo -d "name=todo application POST&description=complete this todo application's POST route&deadline=2018-12-20&tags=task, cn, job"`

2. Fetch List Of Todos
`cUrl -X GET http://localhost:9001/api/todo`

3. View A Specific Todo ({id} should be replaced by a valid id from command#2)
`cUrl -X GET http://localhost:9001/api/todo/{id}`

4. Delete A Specific Todo
`cUrl -X DELETE http://localhost:9001/api/todo/5c153a3f3953ff0790c5cc9e`

## Useful link
* [Node.JS REST Tutorial](https://codeburst.io/writing-a-crud-app-with-node-js-and-mongodb-e0827cbbdafb)
* [How to run cUrl on 64-bit Windows](https://stackoverflow.com/questions/25044010/running-curl-on-64-bit-windows)
* [Apidoc tutorial](http://apidocjs.com/#getting-started)

## Further Learning
I have identified few areas in this project which should be improved for learning purpose. Although it can be a extensive list, following are some which I personally want to learn:
* [Microsoft REST API Guidelines](https://github.com/Microsoft/api-guidelines/blob/vNext/Guidelines.md)
* [Consistent Error Codes according to "Microsoft REST API Guidelines"](https://github.com/Microsoft/api-guidelines/blob/vNext/Guidelines.md)