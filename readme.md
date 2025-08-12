Task Management API
Simple and functional REST API for task management with user authentication system.
🚀 Technologies

Node.js - server runtime environment
Express.js - web framework
MongoDB - NoSQL database
Mongoose - ODM for MongoDB
JWT - authentication via tokens
bcrypt - password hashing

📋 Functionality

✅ User registration and authorization
✅ CRUD operations with tasks
✅ JWT token authentication
✅ Assigning tasks to users
✅ Middleware for checking authorization
✅ Data validation

🛠 Installation and launch
Prerequisites

Node.js (v16+)
MongoDB Atlas account or local MongoDB
npm or yarn

Installation

Clone the repository:
bashgit clone https://github.com/DanyloChervonyi/MyTaskSystem
cd task-management-api

Install dependencies:
bashnpm install

Create a file .env:
envPORT=4200
DB_URL=your_mongodb_connection_string
JWT_SECRET=your_secret_key

Launch the project:
bash# Development mode
npm run dev

# Production mode
npm start


The server will be available at: http://localhost:4200
📖 API Documentation
Full API documentation is available in the file: docs/api.md
Main endpoints:
POST /api/auth/register - Registration
POST /api/auth/login - Authorization
GET /api/tasks - Get tasks
POST /api/tasks - Create task
PUT /api/tasks/:id - Update task
DELETE /api/tasks/:id - Delete task
🏗 Project structure
├── config/
│ └── db.js                 # Connection to MongoDB
├── controllers/
│ ├── auth.controller.js    # Authentication logic
│ └── task.controller.js    # CRUD operations with tasks
├── middleware/
│ └── auth.middleware.js    # JWT authorization
├── models/
│ ├── user.model.js         # User model
│ └── task.model.js          # Task model
├── routes/
│ ├── auth.routes.js        # Authentication routes
│ └── task.routes.js        # Task routes
├── docs/
│ └── api.md                # API documentation
├── .env                    # Environment variables
├── server.js               # Entry point
└── package.json

🧪 Testing
For API testing, it is recommended to use:

Thunder Client (VS Code)
Postman
Insomnia

Examples of queries are available in the documentation.

📝 License
MIT License

👤 Author
Danylo Chervonyi

GitHub: https://github.com/DanyloChervonyi
Email: dychervony@gmail.com