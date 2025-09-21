# NurtureHeal Task Management API

## Objective
Build a simple Task Management API to demonstrate backend development skills, database handling, and clean coding practices.

---

## Tech Stack
- **Backend:** Node.js with Express
- **Database:** MongoDB
- **Testing:** Jest, Supertest
- **Optional Frontend:** React + Axios + TailwindCSS (bonus)
- **Environment variables:** dotenv

---

## Setup Instructions

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd NurtureHeal-TaskAPI/backend

### 2. Install backend dependencies
npm install

### 3. Create a .env file in the backend folder
    PORT=5000
    MONGO_URI=mongodb+srv://Akshara:ak123456@cluster0.ydd2zmg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
    MONGO_URI_TEST=mongodb+srv://Akshara:ak123456@cluster0.ydd2zmg.mongodb.net/taskmanager_test?retryWrites=true&w=majority&appName=Cluster0

### 4. Start the backend server
npm start
Server will run at: http://localhost:5000

### 5. Run unit tests
npm test
Tests cover Users and Tasks endpoints.

### API Endpoints
### Users
Method	Endpoint	Description	Body
POST	/api/users	Create a new user	{ "name": "User Name", "email": "user@example.com" }
GET	/api/users	List all users	-
GET	/api/users/:id	Get user by ID	-
PUT	/api/users/:id	Update user details	{ "name": "New Name", "email": "new@example.com" }
DELETE	/api/users/:id	Delete a user	-
### Tasks
Method	Endpoint	Description	Body / Query Parameters
POST	/api/tasks	Create a new task	{ "title": "Task Title", "description": "Task Description", "status": "pending", "deadline": "YYYY-MM-DD", "assignedUser": "userId" }
GET	/api/tasks	List all tasks	Optional query: status, deadline, skip, limit
PUT	/api/tasks/:id	Update task details	{ "title": "New Title", "description": "New Description", "status": "completed", "deadline": "YYYY-MM-DD" }
DELETE	/api/tasks/:id	Delete a task	-
Features Implemented

Users CRUD operations

Tasks CRUD operations

Task filtering by status and deadline

Pagination (skip, limit) for task listing

Error handling with central middleware

Unit tests for Users and Tasks endpoints

Bonus Features


Containerization using Docker (optional)

Running Tests

All tests are in the tests/ folder.

Run all tests:

npm test


Tests cover:

User creation, retrieval, update, deletion

Task creation, retrieval, update, deletion

Folder Structure
backend/
├── controllers/
│   ├── taskController.js
│   └── userController.js
├── middleware/
│   └── errorHandler.js
├── models/
│   ├── Task.js
│   └── User.js
├── routes/
│   ├── taskRoutes.js
│   └── userRoutes.js
├── tests/
│   ├── task.test.js
│   └── user.test.js
├── .env
├── app.js
├── server.js
├── package.json
└── README.md

How to Contribute

Fork the repository

Clone locally

Install dependencies and run tests

Make your changes

Commit and push changes

Open a pull request



---

