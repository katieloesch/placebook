# PlaceBook

<!-- <img src="" alt="" width="250">
image source: []() -->

## Overview

1. [Description](#description)
2. [Deployment Link](#deployment-link)
3. [Installation](#installation)
4. [Technologies Used](#technologies)
5. [Deliverables](#deliverables)
6. [Planning & Build Process](#planning)
7. [Challenges](#challenges)
8. [Wins](#wins)
9. [Key Learnings & Takeaways](#takeaways)
10. [Future Improvements](#future-improvements)

---

## <a name="description"></a> 1. Description

<!-- <img src="" alt="" width="250">

image source: []() -->

## <a name="deployment-link"></a> 2. Deployment Link

:link:&nbsp; https://placebook.katieloesch.co.uk/

backend repository - https://github.com/katieloesch/placebook-backend

## <a name="installation"></a> 3. Installation

## <a name="technologies"></a> 4. Technologies Used

### Core Technologies

This application was built using the `MERN stack`, an open source–centric collection of technologies that uses `JavaScript` for both the browser and server sides of a web application:

- **Frontend**
  - **React.js** (v18.3.1)
  - <sub>A JavaScript library for building user interfaces, particularly single-page applications where efficient and dynamic rendering of components is crucial.</sub>
    - <sub>[website](https://react.dev/)</sub>
    - <sub>[GitHub repository](https://github.com/reactjs/react.dev)</sub>
- **Backend**
  - **Express.js** (v4.19.2)
    - <sub>A fast and minimalist web framework for Node.js, used to build web applications and APIs.</sub>
    - <sub>[npm page](https://www.npmjs.com/package/express)</sub>
    - <sub>[GitHub repository](https://github.com/expressjs/express)</sub>
    - <sub> [website](https://expressjs.com/)</sub>
  - **Node.js** (v20.14.0)
    - <sub>A JavaScript runtime built on Chrome's V8 JavaScript engine, allowing developers to use JavaScript to build server-side applications with event-driven, non-blocking I/O.</sub>
    - <sub>[website](https://nodejs.org)</sub>
    - <sub>[GitHub Repository](https://github.com/nodejs)</sub>
- **Database**
  - **MongoDB / MongoDB Atlas** (v7.0.12)
    - <sub>MongoDB: a document-oriented NoSQL database designed for scalability and flexibility, making it easy to store and retrieve large volumes of structured and semi-structured data.</sub>
    - <sub>MongoDB Atlas: a fully managed cloud-based service that hosts and manages MongoDB databases, provided by the creators of MongoDB.</sub>
    - <sub>[MongoDB website](https://www.mongodb.com/)</sub>
    - <sub>[MongoDB GitHub Repository](https://github.com/mongodb/mongo)</sub>
    - <sub>[MongoDB Atlas website](https://www.mongodb.com/cloud/atlas/register)</sub>
  - **Mongoose** (v8.5.3)
    - <sub>A MongoDB object modeling tool designed to work in an asynchronous environment, providing schema-based solutions to model data in a MongoDB database.</sub>
    - <sub>[npm page](https://www.npmjs.com/package/mongoose)</sub>
    - <sub>[GitHub repository](https://github.com/Automattic/mongoose)</sub>
    - <sub> [website](https://mongoosejs.com/)</sub>
    - <sub>[mongoDB](https://www.mongodb.com/developer/languages/javascript/getting-started-with-mongodb-and-mongoose/)</sub>

### Key Dependencies - Frontend

- **react-router-dom** (v6.24.0)
  - <sub>An implementation of react-router that includes additional components for browser-based routing</sub>
  - <sub>[npm page](https://www.npmjs.com/package/react-router-dom)</sub>
  - <sub>[GitHub repository](https://github.com/remix-run/react-router)</sub>
  - <sub> [website](https://reactrouter.com/en/main)</sub>
- **react-transition-group** (v4.4.5)
  - <sub>A library for handling animations and transitions in React applications</sub>
  - <sub>[npm page](https://www.npmjs.com/package/react-transition-group)</sub>
  - <sub>[GitHub repository](https://github.com/reactjs/react-transition-group)</sub>
  - <sub> [website](https://reactcommunity.org/react-transition-group/)</sub>
- **sass** (v1.77.8)
  - <sub>A CSS preprocessor used for styling the application</sub>
  - <sub>[npm page](https://www.npmjs.com/package/sass)</sub>
  - <sub>[GitHub repository](https://github.com/sass/dart-sass)</sub>

### Key Dependencies - Backend

- **axios** (v1.7.4)
  - <sub>A promise-based HTTP client for Node.js and the browser that simplifies making asynchronous HTTP requests to REST endpoints.</sub>
  - <sub>[npm page](https://www.npmjs.com/package/axios)</sub>
  - <sub>[GitHub repository](https://github.com/axios/axios)</sub>
  - <sub> [website](https://axios-http.com/)</sub>
- **body-parser** (v1.20.2)
  - <sub>A Node.js body parsing middleware, supporting JSON and URL-encoded data.</sub>
  - <sub>[npm page](https://www.npmjs.com/package/body-parser)</sub>
  - <sub>[GitHub repository](https://github.com/expressjs/body-parser)</sub>
- **bcryptjs** (v2.4.3)
  - <sub>A JavaScript library for hashing and comparing passwords securely using the bcrypt algorithm.</sub>
  - <sub>[npm page](https://www.npmjs.com/package/bcryptjs)</sub>
  - <sub>[GitHub repository](https://github.com/dcodeIO/bcrypt.js)</sub>
- **dotenv** (v16.4.5)
  - <sub>A zero-dependency module that loads environment variables from a .env file into process.env, allowing secure configuration settings management.</sub>
  - <sub>[npm page](https://www.npmjs.com/package/dotenv)</sub>
  - <sub>[GitHub repository](https://github.com/motdotla/dotenv)</sub>
  - <sub> [website](https://dotenvx.com/)</sub>
- **express** (v4.19.2)
  - <sub>A fast and minimalist web framework for Node.js, used to build web applications and APIs.</sub>
  - <sub>[npm page](https://www.npmjs.com/package/express)</sub>
  - <sub>[GitHub repository](https://github.com/expressjs/express)</sub>
  - <sub> [website](https://expressjs.com/)</sub>
- **express-validator** (v7.2.0)
  - <sub>A set of express.js middleware functions that offer a way to validate and sanitise input data, helping to prevent common security vulnerabilities.</sub>
  - <sub>[npm page](https://www.npmjs.com/package/express-validator)</sub>
  - <sub>[GitHub repository](https://github.com/express-validator/express-validator)</sub>
  - <sub> [website](https://express-validator.github.io/docs)</sub>
- **jsonwebtoken** (v9.0.2)
  - <sub>A library for creating, signing, and verifying JSON Web Tokens (JWTs), which are used for securely transmitting information between parties.</sub>
  - <sub>[npm page](https://www.npmjs.com/package/jsonwebtoken)</sub>
  - <sub>[GitHub repository](https://github.com/auth0/node-jsonwebtoken)</sub>
  - <sub> [website (JsonWebToken implementation for node.js)](https://self-issued.info/docs/draft-ietf-oauth-json-web-token.html)</sub>
- **mongoose** (v8.5.3)
  - <sub>A MongoDB object modeling tool designed to work in an asynchronous environment, providing schema-based solutions to model data in a MongoDB database.</sub>
  - <sub>[npm page](https://www.npmjs.com/package/mongoose)</sub>
  - <sub>[GitHub repository](https://github.com/Automattic/mongoose)</sub>
  - <sub> [website](https://mongoosejs.com/)</sub>
- **mongoose-unique-validator** (v5.0.1)
  - <sub>A Mongoose plugin that adds pre-save validation for unique fields within a Mongoose schema, ensuring unique constraints are respected.</sub>
  - <sub>[npm page](https://www.npmjs.com/package/mongoose-unique-validator)</sub>
  - <sub>[GitHub repository](https://github.com/mongoose-unique-validator/mongoose-unique-validator)</sub>
- **multer** (v1.4.5-lts.1)
  - <sub>A middleware for handling multipart/form-data, commonly used for uploading files in Express.js applications.</sub>
  - <sub>[npm page](https://www.npmjs.com/package/multer)</sub>
  - <sub>[GitHub repository](https://github.com/expressjs/multer)</sub>
- **nodemon** (v3.1.4)
  - <sub> A utility that automatically restarts your Node.js server when files change, making development faster and more efficient.</sub>
  - <sub>[npm page](https://www.npmjs.com/package/nodemon)</sub>
  - <sub>[GitHub repository](https://github.com/remy/nodemon)</sub>
  - <sub>[website](https://nodemon.io/)</sub>
- **uuid** (v10.0.0)
  - <sub> A library that generates RFC-compliant universally unique identifiers (UUIDs) for use in various applications where unique identification is required.</sub>
  - <sub>[npm page](https://www.npmjs.com/package/uuid)</sub>
  - <sub>[GitHub repository](https://github.com/uuidjs/uuid)</sub>

### UI and Design

- **Fonts**:

- **Icons**
  - **Iconify**
    - <sub>A free and open-source framework providing access to a vast number of icons, designed for use across various platforms and environments, including React.</sub>
    - <sub>[website](https://icon-sets.iconify.design/)</sub>
    - <sub>[GitHub repository](https://github.com/iconify/iconify/tree/main)</sub>
    - <sub>[license](https://github.com/iconify/iconify/blob/main/license.txt)</sub>
  - **Font Awesome**
    - <sub>An icon library offering a large set of scalable and customisable icons, with a free version that is open source.</sub>
    - <sub>[website](https://fontawesome.com/)</sub>
    - <sub>[GitHub repository](https://github.com/FortAwesome/Font-Awesome)</sub>
    - <sub>[license](https://fontawesome.com/license/free)</sub>

### Development Tools

- **Git / GitHub**
  - <sub>Used for version control and collaboration.</sub>
  - <sub>[Git website](https://git-scm.com/)</sub>
  - <sub>[GitHub website](https://github.com/)</sub>
- **Visual Studio Code (VSCode)**
  - <sub>Code editor used for development.</sub>
  - <sub>[website](https://code.visualstudio.com/)</sub>
  - <sub>[GitHub repository](https://github.com/microsoft/vscode)</sub>
- **Google Chrome & Chrome DevTools**
  - <sub>Used for testing, debugging, and developing in the browser.</sub>
  - <sub>[Google Chrome website](https://www.google.com/chrome/)</sub>
  - <sub>[Chrome DevTools documentation](https://developer.chrome.com/docs/devtools)</sub>
- serve
  - <sub>Runs a script to start a local static file server, used to preview production builds of frontend app.</sub>
  - <sub>[Google Chrome website](https://www.google.com/chrome/)</sub>
  - <sub>[Chrome DevTools documentation](https://developer.chrome.com/docs/devtools)</sub>
- **Excalidraw**
  - <sub>Tool used to create wireframes for the application.</sub>
  - <sub>[website](https://excalidraw.com/)</sub>
  - <sub>[GitHub repository](https://github.com/excalidraw/excalidraw)</sub>
- **ChatGPT4o**:
  - <sub>Generative AI tool used for debugging and development support.</sub>
  - <sub>[website](https://chat.openai.com/)</sub>
  - <sub>[GitHub repository](https://github.com/openai)</sub>

### Deployment

- Frontend - **Hostinger**:
  - <sub>Web hosting service that offers shared, cloud, and VPS hosting solutions for websites, domains, and custom applications</sub>
  - <sub>[UK website](https://www.hostinger.co.uk)</sub>
  - <sub>[US website](https://www.hostinger.com/)</sub>
- Backend - **Heroku**:
  - <sub>Cloud platform that enables developers to build, run, and scale applications by abstracting away server infrastructure management</sub>
  - <sub>[website](https://www.heroku.com/)</sub>
  - <sub>[GitHub repository](https://github.com/heroku)</sub>

### Resources and tutorials

- **Documentation**
  - <sub>[axios](https://axios-http.com/docs/intro)</sub>
- **Udemy**
  - <sub>[React, NodeJS, Express & MongoDB - The MERN Fullstack Guide](https://www.udemy.com/course/react-nodejs-express-mongodb-the-mern-fullstack-guide/?couponCode=OF83024F) by [Manuel Lorenz](https://www.udemy.com/user/manuel-lorenz/) & [Maximilian Schwarzmüller](https://www.udemy.com/user/maximilian-schwarzmuller/)</sub>
  - <sub>[React - The Complete Guide 2024 (incl. Next.js, Redux)](https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/25595350?start=0#overview) by [Maximilian Schwarzmüller](https://www.udemy.com/user/maximilian-schwarzmuller/)</sub>
  - <sub>[MERN 2024 Edition - MongoDB, Express, React and NodeJS](https://www.udemy.com/course/mern-stack-course-mongodb-express-react-and-nodejs/) by [John Smilga](https://www.udemy.com/user/janis-smilga-3/)</sub>
  - <sub>[The Complete Node.js Developer Course (3rd Edition)](https://www.udemy.com/course/the-complete-nodejs-developer-course-2/) by [Andrew Mead](https://www.udemy.com/user/andrewmead/) & [Rob Percival](https://www.udemy.com/user/robpercival/)</sub>

## <a name="deliverables"></a> 5. Deliverables

### MVP

#### 1. Authentication & Authorization

- Secure sign-up and login with JWT-based authentication
- Password hashing
- Role-based access control to protect user-specific data and routes

#### 2. Full CRUD operations for places:

- Create new places with title, description, and address
- Upload an image associated with each place
- Edit or delete only the user’s own places
- View all users and their shared places

#### 3. Frontend

- Responsive design with a clean, intuitive layout
- Context API for global state management
- Custom hooks for HTTP requests and form handling
- Real-time image preview during place creation
- Data validation for form inputs
- Interactive map display using Google Maps API to visualize location data

#### 4. Backend

- RESTful API with modular routing, structured error handling, and data validation
- Data validation and sanitization
- Data storage using MongoDB and hosting via MongoDB Atlas

#### 5. Deployment

- Independent deployment of frontend and backend

<!--

### Potential Extra Features / Stretch Goals

### User Stories -->

## <a name="planning"></a> 6. Planning & Build Process

<!-- bronze plan | silver plan | gold plan



-->

### wireframe

<img src="./src/assets/images/wireframe.png" alt="wireframe" width="750">

### ERD

<img src="./src/assets/images/erd.png" alt="erd" width="400">

## <a name="challenges"></a> 7. Challenges

## <a name="wins"></a> 8. Wins

## <a name="takeaways"></a> 9. Key Learnings & Takeaways

## <a name="future-improvements"></a> 10. Future Improvements

<!--


### day 1: 29/06/2024

- create-react-app
- wireframe
- erd

### day 2: 02/07/2024

modal

### 26/07/2024

- modal to confirm deletion
- switch to single quotes
- refactoring folder structure/imports

### resources + tutorials

- [React, NodeJS, Express & MongoDB - The MERN Fullstack Guide](https://www.udemy.com/course/react-nodejs-express-mongodb-the-mern-fullstack-guide/) by [Manuel Lorenz](https://www.udemy.com/user/manuel-lorenz/) & [Maximilian Schwarzmüller](https://www.udemy.com/user/maximilian-schwarzmuller/)

28/08/2024
connect frontend +backend

 -->
