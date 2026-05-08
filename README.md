
# Team Task Manager

## 📌 Project Overview

Team Task Manager is a full-stack web application developed to help teams and individuals manage projects and tasks efficiently.

The application allows users to:

- Create accounts securely
- Login using JWT authentication
- Create and manage projects
- Create and track tasks
- Update task progress
- Monitor overdue tasks
- View dashboard analytics

The system ensures that each user can only access their own projects and tasks, providing proper data isolation and secure role-based functionality.

---

# 🚀 Live Application

## Frontend
https://YOUR-VERCEL-URL.vercel.app

## Backend API Documentation
https://team-task-manager-7oqt.onrender.com/docs

---

# 🛠️ Tech Stack

## Frontend Technologies

| Technology | Purpose |
|---|---|
| React.js | Building interactive user interface |
| Vite | Fast frontend development environment |
| Tailwind CSS | Styling and responsive UI |
| Axios | API communication |
| React Router DOM | Page routing and navigation |

---

## Backend Technologies

| Technology | Purpose |
|---|---|
| FastAPI | Backend API development |
| SQLAlchemy | ORM for database operations |
| PostgreSQL | Relational database |
| Pydantic | Request validation |
| JWT Authentication | Secure authentication system |

---

## Deployment Platforms

| Platform | Purpose |
|---|---|
| Vercel | Frontend deployment |
| Render | Backend deployment |
| Neon | Cloud PostgreSQL database |

---

# ✨ Features

## 🔐 Authentication System

- User Signup
- User Login
- Password hashing
- JWT token generation
- Protected routes
- Logout functionality

The authentication system ensures secure access to the application.

---

## 📁 Project Management

Users can:

- Create projects
- View all their projects
- Manage project details

Each project is linked to the logged-in user.

---

## ✅ Task Management

Users can:

- Create tasks
- Assign tasks to projects
- Set due dates
- Update task status
- Track task progress

Task statuses include:
- Pending
- In Progress
- Completed

---

## 📊 Dashboard Analytics

The dashboard provides:

- Total tasks count
- Completed tasks count
- Pending tasks count
- Overdue tasks count

This helps users monitor productivity and task progress.

---

## ⏰ Overdue Task Detection

The system automatically highlights overdue tasks that are not completed.

This improves task visibility and project tracking.

---

## 👤 User-Specific Data Isolation

Each user can only access:
- Their own projects
- Their own tasks
- Their own dashboard statistics

This ensures proper security and multi-user support.

---

# 📂 Project Structure

```bash
team-task-manager/
│
├── client/
│   ├── src/
│   ├── components/
│   ├── pages/
│   ├── layouts/
│   ├── services/
│   └── context/
│
├── server/
│   ├── app/
│   │   ├── routers/
│   │   ├── models/
│   │   ├── schemas/
│   │   ├── middleware/
│   │   ├── utils/
│   │   └── database/
│   │
│   ├── requirements.txt
│   └── .env
│
└── README.md
