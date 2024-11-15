# Road Safety Platform

A multilingual, interactive e-learning platform that aims to educate the public about road safety, traffic rules, and best practices, especially for young learners and new drivers. This platform is designed to promote road safety education across different regions in India, offering region-specific content and notifications in multiple languages.

Table of Contents
1. Features
2. Technologies Used
3. Setup Instructions
4. Backend API
5. Frontend
6. Deployment
7. Contributing

1. Features
- **Multilingual Support**: The platform offers content in multiple languages to cater to various linguistic communities.
- **Interactive Courses**: Engaging modules with videos, quizzes, and audio content that are designed for young learners and new drivers.
- **Real-Time Alerts**: Provides location-based notifications with essential safety updates.
- **User Authentication**: Users can register, log in, and track their learning progress.
- **Admin Dashboard**: Admins can manage content, courses, and user data.
- **Region-Specific Content**: Courses are tailored according to regional traffic laws and practices.

2. Technologies Used
- **Frontend**: 
  - HTML, CSS, JavaScript
  - Bootstrap (for responsive design)
  - React.js (for dynamic and interactive pages)
- **Backend**: 
  - Node.js
  - Express.js
  - MongoDB (for storing user data, courses, and updates)
  - Mongoose (for MongoDB ORM)
  - JWT (JSON Web Token) for user authentication
  - NodeMailer (for sending notifications and alerts)
- **Others**: 
  - CORS (for enabling communication between the frontend and backend)
  - dotenv (for managing environment variables)

## Setup Instructions

1. Clone the Repository
To start with the project, clone the repository to your local machine:
```bash
git clone https://github.com/mukthameti/e-commerce.git
cd road-safety-platform
```

2. Install Dependencies
Backend:
Navigate to the `backend` directory and install the dependencies:
```bash
cd backend
npm install
```
Frontend:
Navigate to the `frontend` directory and install the dependencies:
```bash
cd frontend
npm install
```

3. Environment Configuration
Create a `.env` file in the root directory of the backend and add the following environment variables:
```
MONGO_URI=mongodb://localhost:27017/road_safety_platform
JWT_SECRET=your-jwt-secret-key
PORT=5000
NODE_ENV=development
```
This file will store your sensitive information like the MongoDB URI, JWT secret key, and port number.

4. Running the Application
   Backend:
To run the backend server, use the following command:
```bash
npm start
```
Alternatively, use the `dev` command if you want auto-reloading with `nodemon`:
```bash
npm run dev
```
The backend will be available at `http://localhost:5000`.
Frontend:
For static frontend (HTML, CSS, JS), simply open the `index.html` file in your browser. If using a dynamic frontend framework like React:
```bash
npm start
```
This will launch the frontend server at `http://localhost:3000`.
Backend API
### Authentication
- **POST /api/auth/register**: Register a new user.
- **POST /api/auth/login**: Login and get a JWT token.
### Courses
- **GET /api/courses**: Fetch all available courses.
- **POST /api/courses**: Add a new course (Admin only).
### Updates
- **GET /api/updates**: Fetch real-time updates (alerts, safety tips).
- **POST /api/updates**: Create a new safety update (Admin only).
### Real-Time Notifications
- **POST /api/notifications**: Send alerts to users (email or SMS).
## Frontend
The frontend includes:
- **Home Page**: Displays an overview of the platform and links to courses.
- **Courses Page**: Displays available road safety courses with multimedia support.
- **Contact Page**: Offers information about the platform and ways to get in touch.
- **About Page**: Explains the platform’s purpose and mission to educate users on road safety.
- **Login/Signup Pages**: Secure user authentication using JWT tokens.

## Deployment

### Backend Deployment
You can deploy the backend to cloud platforms like **Heroku**, **AWS**, or **DigitalOcean**. Here’s how to deploy on Heroku:
1. Install the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli).
2. Run the following commands:
   ```bash
   heroku create
   git push heroku master
   heroku config:set MONGO_URI=your_mongo_uri JWT_SECRET=your_jwt_secret
   ```

### Frontend Deployment
For static frontend (HTML, CSS, JavaScript), deploy using **Netlify** or **Vercel**:
1. Sign up on [Netlify](https://www.netlify.com) or [Vercel](https://vercel.com).
2. Link your GitHub repository and deploy.
For dynamic frontends like React, you can deploy the full stack on platforms like **Heroku** or **Render**.

## Contributing
We welcome contributions to improve the platform. Follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make changes and commit (`git commit -am 'Add feature'`).
4. Push the changes (`git push origin feature/your-feature`).
5. Open a pull request to merge your changes into the main branch.
