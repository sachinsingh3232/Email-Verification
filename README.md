# MERN Email-Verification

A MERN application using basic CRUD operations , authentication.

# Deployed Link https://email-verification32.vercel.app/

## Table of Contents

- [Features](#features)
- [Tools and Technologies](#tools-and-technologies)
- [Dependencies](#dependencies)
- [Dev-dependencies](#dev-dependencies)
- [Prerequisites](#prerequisites)
- [Installation and setup](#installation-and-setup)
- [Backend API](#backend-api)
- [frontend pages](#frontend-pages)
- [npm scripts](#npm-scripts)
- [Useful Links](#useful-links)

## Features

### User-side features

- Signup
- Login
- Logout
### Developer-side features

- Form validations in frontend and backend
- Token based Authentication
- Relevant redirects
- Use of various React hooks
- Routes protection
- Use of different HTTP status codes for sending responses

## Tools and Technologies

- HTML
- CSS
- Javascript
- Node.js
- Express.js
- React
- Mongodb

## Dependencies

Following are the major dependencies of the project:

- axios
- react
- react-dom
- react-router-dom
- chakra-ui
- bcrypt
- dotenv
- cors
- dotenv
- express
- jsonwebtoken
- mongoose

## Dev-dependencies

Following are the major dev-dependencies of the project:

- nodemon

## Prerequisites

- Node.js must be installed on the system.
- You should have a MongoDB database.
- You should have a code editor (preferred: VS Code)

## Installation and Setup

1. Install all the dependencies

   ```sh
   npm run install
   ```

2. Create a file named ".env" inside the Config folder of backend. Add data from .env.example file and substitute your credentials there.
   ```sh
   CORS_URL=http://localhost:3000
   MONGO_URL=
   JWT_SECRET=
   PORT=9000
   EMAIL=nodemailer email
   PASS=password
   ```

3. Start the application

   ```sh
   nodemon server.js in backend
   npm start in frontend
   ```

4. Go to http://localhost:3000

## Backend API

<pre>
- POST     /api/user/register
- POST     /api/user/login
- GET      /api/user/confirmEmail/token
</pre>

## Frontend pages

<pre>
- /                 Home Screen (Public home page for guests and private dashboard (tasks) for logged-in users)
- /signup           Signup page
- /login            Login page
</pre>

## npm scripts

Inside frontend folder:

- `npm start`: Starts frontend in development mode
- `npm run build`: Builds the frontend for production to the build folder
- `npm test`: Launches the test runner in the interactive watch mode
- `npm run eject`: This will remove the single build dependency from the frontend.

## Useful Links

- This project

  - Github Repo: https://github.com/sachinsingh3232/Email-Verification

- Official Docs

  - Reactjs docs: https://reactjs.org/docs/getting-started.html
  - npmjs docs: https://docs.npmjs.com/
  - Mongodb docs: https://docs.mongodb.com/manual/introduction/
  - Github docs: https://docs.github.com/en/get-started/quickstart/hello-world
