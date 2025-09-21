# NurtureHeal Task Management API

A simple Task Management API built with Node.js, Express, and MongoDB.

---

## Table of Contents

- [Objective](#objective)
- [Tech Stack](#tech-stack)
- [Setup Instructions](#setup-instructions)
- [API Endpoints](#api-endpoints)
- [Features](#features)
- [Running Tests](#running-tests)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)

---

## Objective

Demonstrate backend development skills, database handling, and clean coding practices by building a Task Management API.

---

## Tech Stack

- **Backend:** Node.js, Express
- **Database:** MongoDB
- **Testing:** Jest, Supertest
- **Environment Variables:** dotenv
- **Optional Frontend:** React, Axios, TailwindCSS

---

## Setup Instructions

1. **Clone the repository**
    ```bash
    git clone <your-repo-url>
    cd NurtureHeal-TaskAPI/backend
    ```

2. **Install dependencies**
    ```bash
    npm install
    ```

3. **Create a `.env` file in the backend folder**
    ```
    PORT=5000
    MONGO_URI=<your-mongodb-uri>
    MONGO_URI_TEST=<your-mongodb-test-uri>
    ```

4. **Start the backend server**
    ```bash
    npm start
    ```
    The server will run at: [http://localhost:5000](http://localhost:5000)

5. **Run unit tests**
    ```bash
    npm test
    ```

---

## API Endpoints

### Users

| Method | Endpoint         | Description         | Body                                      |
|--------|------------------|--------------------|-------------------------------------------|
| POST   | `/api/users`     | Create a new user  | `{ "name": "User Name", "email": "user@example.com" }` |
| GET    | `/api/users`     | List all users     | -                                         |
| GET    | `/api/users/:id` | Get user by ID     | -                                         |
| PUT    | `/api/users/:id` | Update user        | `{ "name": "New Name", "email": "new@example.com" }` |
| DELETE | `/api/users/:id` | Delete a user      | -                                         |

### Tasks

| Method | Endpoint         | Description         | Body / Query Parameters                   |
|--------|------------------|--------------------|-------------------------------------------|
| POST   | `/api/tasks`     | Create a new task  | `{ "title": "Task Title", "description": "Task Description", "status": "pending", "deadline": "YYYY-MM-DD", "assignedUser": "userId" }` |
| GET    | `/api/tasks`     | List all tasks     | Optional query: `status`, `deadline`, `skip`, `limit` |
| PUT    | `/api/tasks/:id` | Update task        | `{ "title": "New Title", "description": "New Description", "status": "completed", "deadline": "YYYY-MM-DD" }` |
| DELETE | `/api/tasks/:id` | Delete a task      | -                                         |

---

## Features

- Users CRUD operations
- Tasks CRUD operations
- Task filtering by status and deadline
- Pagination for task listing
- Centralized error handling
- Unit tests for Users and Tasks endpoints

---

## Running Tests

All tests are in the `tests/` folder.

To run all tests:
```bash
npm test
```

Tests cover:
- User creation, retrieval, update, deletion
- Task creation, retrieval, update, deletion

---

## Folder Structure

```
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
```

---

## Contributing

1. Fork the repository
2. Clone locally
3. Install dependencies and run tests
4. Make your changes
5. Commit and push changes
6. Open a pull request

---

