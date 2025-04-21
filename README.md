# Mess Management System

A comprehensive web application for managing college/institution mess operations, built with React and Material-UI.

## Features

- **Interactive Dashboard**
  - Daily menu display with visual representations
  - Real-time meal status updates
  - Comprehensive menu details
  - Meal timing information

- **Attendance Management**
  - Secure admin login (password: 'iamadmin')
  - Student attendance tracking
  - Meal-wise attendance marking
  - Paginated student list
  - Room and roll number tracking

- **Feedback System**
  - Meal-specific feedback
  - Rating system
  - Comments and suggestions
  - User-friendly form interface

## Technologies Used

- React.js
- Material-UI (MUI)
- React Router
- Axios
- Netlify (Deployment)

## Setup and Installation

1. Clone the repository:
```bash
git clone [repository-url]
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

## Screenshots

### Dashboard
<div align="center">
  <img src="./src/assets/image.png" alt="Dashboard" width="800"/>
  <p><em>Dashboard showing daily menu and meal timings</em></p>
</div>

### Attendance System
<div align="center">
  <img src="./src/assets/image copy 2.png" alt="Attendance" width="800"/>
  <p><em>Student attendance management with admin login</em></p>
</div>
<div align="center">
  <img src="./src/assets/image copy.png" alt="Attendance" width="800"/>
  <p><em>Student attendance management with admin login</em></p>
</div>

### Feedback Form
<div align="center">
  <img src="./src/assets/image copy 3.png" alt="Feedback" width="800"/>
  <p><em>User feedback form with ratings and comments</em></p>
</div>

## Deployment

The application is deployed using Netlify. Configuration includes:

- Automatic deployments from main branch
- Client-side routing support
- Environment variable management

```toml
[build]
  command = "npm run build"
  publish = "build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

## Project Structure
