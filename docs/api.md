http://localhost:4200 - base url
-------------------------------------------------
POST /api/auth/register - authorization
{
  "name": "Taras Shevchenko",
  "email": "taras@example.com",
  "password": "mypassword123"
}

{
  "message": "Registration successful"
}
-------------------------------------------------
POST /api/auth/login - login
{
  "email": "ivan@example.com",
  "password": "mypassword123"
}

{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
-------------------------------------------------
POST /api/tasks - create task
Authorization: Bearer YOUR_JWT_TOKEN
Content-Type: application/json
{
  "title": "Learn Node.js",
  "description": "Take a course on Node.js and Express",
  "status": "todo",
  "deadline": "2024-12-31T23:59:59.000Z"
}

{
  "_id": "507f1f77bcf86cd799439011",
  "title": "Learn Node.js",
  "description": "Take a course on Node.js and Express",
  "status": "todo",
  "deadline": "2024-12-31T23:59:59.000Z",
  "owner": "507f191e810c19729de860ea",
  "createdAt": "2024-01-15T10:30:00.000Z"
}
-------------------------------------------------
GET /api/tasks - get all tasks
Authorization: Bearer YOUR_JWT_TOKEN

[
  {
    "_id": "507f1f77bcf86cd799439011",
    "title": "Изучить Node.js",
    "description": "Пройти курс по Node.js и Express",
    "status": "todo",
    "deadline": "2024-12-31T23:59:59.000Z",
    "owner": "507f191e810c19729de860ea",
    "createdAt": "2024-01-15T10:30:00.000Z"
  }
]
-------------------------------------------------
PUT /api/tasks/:id - update task
Authorization: Bearer YOUR_JWT_TOKEN
Content-Type: application/json
{
  "status": "in-progress",
  "description": "I'm taking a course on Node.js - I've already learned the basics"
}

{
  "_id": "507f1f77bcf86cd799439011",
  "title": "Изучить Node.js",
  "description": "Прохожу курс по Node.js - уже изучил основы",
  "status": "in-progress",
  "deadline": "2024-12-31T23:59:59.000Z",
  "owner": "507f191e810c19729de860ea",
  "createdAt": "2024-01-15T10:30:00.000Z"
}
-------------------------------------------------
DELETE /api/tasks/:id - delete task
Authorization: Bearer YOUR_JWT_TOKEN

{
  "message": "Task deleted"
}