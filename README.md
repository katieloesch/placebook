# 📍 PlaceBook

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

<img src="./src/assets/screenshots/screenshot_signup_2.png" alt="screenshot of user registration form" height="350">&nbsp;&nbsp;<img src="./src/assets/screenshots/screenshot_users.png" alt="screenshot of landing page " height="350"><br>
<img src="./src/assets/screenshots/screenshot_add_place_2.png" alt="screenshot of " height="350">&nbsp;&nbsp;<img src="./src/assets/screenshots/screenshot_places_1.png" alt="screenshot of user places posts" height="350">

<br>
A full-stack MERN application enabling users to share and manage geo-tagged posts of places they’ve visited.
Users can register, log in and generate posts with a title, description, image and address. Locations are geocoded from the address using the Google Maps API, and images are previewed with the FileReader API before being uploaded using Multer.

<br>
Access is secured with JWT-based authentication, role-based access control and route protection enforced on both on both the client and server sides.
Authentication state is managed globally with React Context, enabling dynamic rendering of protected routes and navigation elements.

<br>The React frontend features a responsive interface that is styled with SCSS and uses custom hooks for form handling and HTTP requests.The Express backend connects to MongoDB Atlas for persistent storage and provides a RESTful API with validation via express-validator and custom error handling.

<br></br>
<img src="./src/assets/screenshots/screenshot_login_2.png" alt="screenshot of user login form" height="350">&nbsp;&nbsp;<img src="./src/assets/screenshots/screenshot_places_2.png" alt="screenshot of user places posts" height="350"><br>
<img src="./src/assets/screenshots/screenshot_update_place.png" alt="screenshot of update place form" height="350">&nbsp;&nbsp;<img src="./src/assets/screenshots/screenshot_delete_place.png" alt="screenshot of delete place confirmation modal" height="350">

## <a name="deployment-link"></a> 2. Deployment Link

:link:&nbsp; https://placebook.katieloesch.co.uk/

backend repository - https://github.com/katieloesch/placebook-backend

## <a name="installation"></a> 3. Installation

To run the application locally:

### 1. Clone the Repository

```zsh
git clone https://github.com/your-username/hunting-buddy.git
cd hunting-buddy
```

### 2. Install Dependencies

Install the frontend dependencies:

```zsh
npm install
```

### 3. Set Up Environment Variables

- The application requires a `.env` file in the root directory to function correctly.
  - This file defines the base URLs for the backend API and the Google Maps API key.

1. Create a `.env` file in the root directory of the project (same level as `package.json`).
2. Copy the required environment variables listed below into the `.env` file

   **Required Environment Variables:**

   ```plaintext
   REACT_APP_BASE_URL=REACT_APP_BASE_URL=https://placebook-015dbd92649b.herokuapp.com
   REACT_APP_API_BASE_URL=https://placebook-015dbd92649b.herokuapp.com/api
   REACT_APP_GOOGLE_API_KEY=your_google_api_key
   ```

3. Replace `your_google_api_key` with your actual Google Maps API key.
   - How to Get a Google Maps API Key:
     1. Go to the [Google Maps Platform](https://developers.google.com/maps).
     2. Create an account or sign in.
     3. Get Started > create a new project or select an existing one (you may need to enter a credit card but there should be a free trial option available)
     4. Enable the **Maps JavaScript API** and **Geocoding API**
     5. Generate a new key: **+ Create Credentials** > **API key**.
     6. Copy the generated key and add it to your `.env` file as `REACT_APP_GOOGLE_API_KEY`.

### 4. Start the App

Once your `.env` file is set up, start the app:

```zsh
npm start
```

- This should launch the frontend on `http://localhost:3000` in your default browser
- If it doesn’t open automatically, visit that address manually in your browser.

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

- **@fortawesome/free-solid-svg-icons** (v6.7.2)
  - <sub>A package that provides a collection of free, solid-style icons from Font Awesome that can be imported and used in React.</sub>
  - <sub>[npm page](https://www.npmjs.com/package/@fortawesome/free-solid-svg-icons)</sub>
  - <sub>[GitHub repository](https://github.com/FortAwesome/Font-Awesome)</sub>
  - <sub> [website](https://fontawesome.com/)</sub>
- **@fortawesome/react-fontawesome** (v0.2.2)
  - <sub>A package that provides a React component for easily rendering Font Awesome icons in React applications.</sub>
  - <sub>[npm page](https://www.npmjs.com/package/@fortawesome/react-fontawesome)</sub>
  - <sub>[GitHub repository](https://github.com/FortAwesome/react-fontawesome)</sub>
  - <sub> [website](https://fontawesome.com/)</sub>
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

- **Fonts**
  - main: **Isidora Soft**, designed by Enrique Hernandez Vasquez
    - <sub>[Font Download](https://font.download/font/isidora-soft-alt)</sub>
  - header: **Rimouski Light**, designed by Ray Larabie
    - <sub>[Online WebFonts](https://www.onlinewebfonts.com/download/0d7062aee3ca5fbffdd8f87c8bddf177)</sub>
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
- **serve**
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

- Frontend - **Hostinger**
  - <sub>Web hosting service that offers shared, cloud, and VPS hosting solutions for websites, domains, and custom applications</sub>
  - <sub>[UK website](https://www.hostinger.co.uk)</sub>
  - <sub>[US website](https://www.hostinger.com/)</sub>
- Backend - **Heroku**
  - <sub>Cloud platform that enables developers to build, run, and scale applications by abstracting away server infrastructure management</sub>
  - <sub>[website](https://www.heroku.com/)</sub>
  - <sub>[GitHub repository](https://github.com/heroku)</sub>

### Resources and tutorials

- Documentation
  - <sub>[axios](https://axios-http.com/docs/intro)</sub>
  - <sub>[express-validator](https://express-validator.github.io/docs/)</sub>
  - <sub>[FileReader - MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/FileReader)</sub>
- Blogs
  - <sub>[How To Use Axios with React](https://www.digitalocean.com/community/tutorials/react-axios-react) by [Paul Halliday](https://www.digitalocean.com/community/users/paulhalliday) and [Christina Gorton](https://www.digitalocean.com/community/users/christinagorton)</sub>
  - <sub>[Introduction to Multer](https://www.geekster.in/articles/introduction-to-multer/) by [Geekster](https://www.geekster.in/)</sub>
  - <sub>[Beginner Topic: File Upload With Multer In Nodejs](https://dev.to/ngfizzy/beginner-topic-file-upload-with-multer-in-nodejs-99m) by [Olufisayo Bamidele](https://dev.to/ngfizzy)</sub>
  - <sub>[How to use the fileReader to show a file with Javascript](https://dev.to/atndesign/how-to-use-the-filereader-to-show-a-file-with-javascript-3i85) by [Moulun Kevin](https://dev.to/atndesign)</sub>
  - <sub>[How to Handle Form Inputs Efficiently with Express-Validator in ExpressJs](https://www.digitalocean.com/community/tutorials/how-to-handle-form-inputs-efficiently-with-express-validator-in-express-js) by [Chiranjeev Singh](https://www.digitalocean.com/community/users/chiranjeevsingh) and [Abhimanyu Selvan](https://www.digitalocean.com/community/users/abhimanyuselvan)</sub>
  - <sub>[How to solve CORS error in Node.js and React applications](https://www.codingdeft.com/posts/nodejs-react-cors-error/) by [Abhishek EH/Coding Deft](https://www.codingdeft.com/)</sub>
  - <sub>[React CORS Guide: What It Is and How to Enable It](https://www.stackhawk.com/blog/react-cors-guide-what-it-is-and-how-to-enable-it/) by [StackHawk](https://www.stackhawk.com/)</sub>
- YouTube
  - <sub>[React Axios API Requests | Axios with React JS Tutorial](https://www.youtube.com/watch?v=ZEKBDXGnD4s) by [Dave Gray](https://www.youtube.com/@DaveGrayTeachesCode)</sub>
  - <sub>[express-validator Node.js tutorial](https://www.youtube.com/watch?v=7i7xmwowwCY) by [Jan Goebel](https://www.youtube.com/watch?v=7i7xmwowwCY)</sub>
  - <sub>[Uploading Images with Multer | NodeJS and ExpressJS](https://www.youtube.com/watch?v=wIOpe8S2Mk8) by [PedroTech](https://www.youtube.com/@PedroTechnologies)</sub>
  - <sub>[Image Previews in React with FileReader](https://www.youtube.com/watch?v=BPUgM1Ig4Po) by [Leigh Halliday](https://www.youtube.com/@leighhalliday)</sub>
- Udemy
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

### Potential Extra Features / Stretch Goals

- File upload for user profile picture
- User profile page
- Dark mode toggle
- Pagination for places
- Refresh token and token renewal system
- Cloudinary or S3 for cloud image storage
- Optimize image sizes automatically on upload
- Unit and integration tests (e.g. Jest, React Testing Library, Supertest)

### User stories

#### Authentication & Access Control

- As a user, I should be able to sign up with my email and password, so that I can create an account and start sharing places.
- As a user, I should be able to log in securely, so that I can access and manage my content.
- As a user, I should be automatically logged out when my token expires, so that my account stays secure.
- As a user, I should only be able to access protected pages if I’m authenticated.

#### Place Management

- As a user, I should be able to add a new place with a title, description, address, and image, so that I can share locations I’ve visited.
- As a user, I should be able to see the address I entered on a map.
- As a user, I should be able to upload an image when creating a place.
- As a user, I should be able to preview my image before uploading it.
- As a user, I should be able to edit or delete a place, so that I can keep my content accurate and up to date.
- As a user, I should be able to view a list of all places shared by a specific user, so that I can see what others have shared.

### User Experience & Interface

- As a user, I should be able to use the app comfortably on any device.
- As a user, I should be able to see loading spinners during data fetches, so that I know the app is working.
- As a user, I should be able to see error messages and modals when something goes wrong, so that I understand what’s happening and how to fix it.

## <a name="planning"></a> 6. Planning & Build Process

### wireframe

<img src="./src/assets/images/wireframe.png" alt="wireframe" width="800">

### ERD

<img src="./src/assets/images/erd.png" alt="erd" width="350">

## <a name="challenges"></a> 7. Challenges

- Authorization Logic: Ensuring that only the original creator of a post could edit or delete their own content required careful implementation of role checks and user ID validation on both the client and server sides.
- CORS Configuration for Cross-Origin Requests: Allowing the frontend and backend to communicate across different domains required configuring CORS headers and handling preflight OPTIONS requests.
- Address Geocoding: Converting user-entered addresses into geo-coordinates for map display involved integrating a geocoding API, managing fallback behaviour, and gracefully handling errors or ambiguous results.
- Conditional Routing Based on Auth State: Dynamically rendering routes and navigation links based on the user's authentication status involved using React Context, route guards, and maintaining consistent state across components.
- File and Error Cleanup: Ensuring that uploaded files weren’t left orphaned after failed requests or remained after their associated places were deleted required implementing cleanup logic both during error handling and on resource deletion.

## <a name="wins"></a> 8. Wins

- Implemented role-based access control and JWT-based authentication with hashed passwords using bcryptjs, ensuring secure user login and registration.
- Achieved full CRUD functionality and integrated the Google Maps API to convert user-provided addresses into geo-coordinates, rendering them on a dynamic map.
- Created custom React hooks to encapsulate HTTP request and form logic, resulting in cleaner and reusable code.
- Delivered a fully responsive user interface that works across both desktop and mobile devices.
- Successfully deployed the frontend and backend independently on separate platforms.

## <a name="takeaways"></a> 9. Key Learnings & Takeaways

- Managed to build a full-stack MERN application from scratch, understanding how frontend and backend systems interact.
- Learned how to implement secure authentication using JWTs and password hashing with bcryptjs, including route protection on both client and server sides.
- Gained experience bridging frontend UX with real-world data services by integrating the Google Maps API to dynamically convert addresses into coordinates and display them on an interactive map
- Developed custom React hooks to abstract logic for HTTP requests and form handling, reinforcing the value of modular, reusable code.
- Deepened my understanding of CORS, environment variables, and cross-origin cookie/session strategies by deploying and debugging a split-stack MERN app

## <a name="future-improvements"></a> 10. Future Improvements

- Testing Suite: Implement unit and integration tests using tools e.g. Jest, React Testing Library, Supertest
- Cloud Image Storage: Migrate image uploads to cloud-based solutions like Cloudinary or AWS S3
- Admin Dashboard: Develop an admin interface to view, manage, and moderate all user-generated content.
- Pagination: Introduce pagination for user and place listings to improve performance and user experience on data-heavy pages.
- Dark Mode: Introduce a dark mode toggle to accommodate user preferences.
- Accessibility Enhancements: Conduct accessibility audits and implement features such as keyboard navigation, screen reader compatibility, and ARIA roles to ensure an inclusive user experience.

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
