define({ "api": [
  {
    "type": "get",
    "url": "todo/:id",
    "title": "View a specific todo",
    "name": "Get_Todo",
    "group": "Todo",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>UUID of todo.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of the Todo.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description of the Todo.</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "created",
            "description": "<p>Creation date of the Todo.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "deadline",
            "description": "<p>Deadline date of the Todo.</p>"
          },
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "tags",
            "description": "<p>List of tags of the Todo.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"name\": \"Machine Learning I Assignment 05\",\n  \"description\": \"Complete assignment 05 of machine learning course\",\n  \"created\": \"2018-12-17\",\n  \"deadline\": \"2019-01-05\",\n  \"tags\": \"assignment, ML, important\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TodoNotFound",
            "description": "<p>The required Todo with specific id not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 Not Found\n{\n  \"error\": \"TodoNotFound\",\n  \"message\": \"todo with id _de8800xace3c not found\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/routes/todo.route.js",
    "groupTitle": "Todo"
  },
  {
    "type": "get",
    "url": "todo/",
    "title": "List all todos",
    "name": "List_Todos",
    "group": "Todo",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "List",
            "optional": false,
            "field": "list",
            "description": "<p>Comprehensive list of all todos (each element in the list contains id and name of todo).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"_id\": \"UUID of the corresponding todo\",\n  \"name\": \"Name of the todo\",\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TodoNotFound",
            "description": "<p>The required Todo with specific id not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 Not Found\n{\n  \"error\": \"ISE\",\n  \"message\": \"an error occured while fetching list of todos\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/routes/todo.route.js",
    "groupTitle": "Todo"
  }
] });
