# Role-Based User Management API

A RESTful backend API built using Node.js, Express.js, and MongoDB that provides secure user authentication and role-based authorization. The application allows administrators to manage users by promoting roles and blocking accounts while protecting sensitive routes using JWT authentication.

## Features

- User Registration
- User Login
- Password Hashing using bcryptjs
- JWT Authentication
- Protected Routes
- Role-Based Authorization (Admin/User)
- View All Users (Admin Only)
- Promote User to Admin
- Block User
- MongoDB Atlas Integration
- REST API Testing with Postman

## Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT (jsonwebtoken)
- bcryptjs
- dotenv
- CORS
- Postman

## Project Structure

```
Syntecxhub_Role_Based_User_Management_API
│
├── config
│   └── db.js
├── controllers
│   └── userController.js
├── middleware
│   ├── authMiddleware.js
│   └── roleMiddleware.js
├── models
│   └── User.js
├── routes
│   └── userRoutes.js
├── utils
│   └── generateToken.js
├── .env
├── .gitignore
├── package.json
├── package-lock.json
└── server.js
```

## Installation

1. Clone the repository

```bash
git clone https://github.com/danveerendra1/Syntecxhub_Role_Based_User_Management_API
```

2. Navigate to the project folder

```bash
cd Syntecxhub_Role_Based_User_Management_API
```

3. Install dependencies

```bash
npm install
```

4. Create a `.env` file and add:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

5. Start the server

```bash
npm run dev
```

## API Endpoints

### Authentication

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/users/register | Register a new user |
| POST | /api/users/login | Login user |

### Admin Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/users | Get all users |
| PUT | /api/users/promote/:id | Promote user to admin |
| PUT | /api/users/block/:id | Block a user |

## Authentication

Protected routes require a JWT token in the Authorization header.

```
Authorization: Bearer <your_token>
```

## Testing

All API endpoints were tested successfully using Postman.

## License

This project was developed as part of the **Syntecxhub Back-End Development Internship** for learning and educational purposes.
