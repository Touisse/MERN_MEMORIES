# Welcome to the Memories Full Stack MERN Application!

This application allows users to create, edit, and delete memories by uploading images, adding captions, and tags. The application features user authentication and authorization using JSON Web Tokens (JWTs) and the bcrypt library for password hashing.

## To get started, clone the repository: <br/>
`` bash git clone https://github.com/Touisse/Full_Stack_MERN_MEMORIES.git ``

## Then, install dependencies for both the client and server:<br/>

`` cd memories-app/client
npm install

cd ../server
npm install``

## Create a `.env` file in the server directory and add the following variables:<br/>

`` PORT=5000
MONGODB_URI=<your_mongodb_uri>
JWT_SECRET=<your_jwt_secret> ``

You can obtain your MongoDB URI by creating an account with MongoDB Atlas, creating a new cluster, and copying the URI.

## Start the server and client:<br/>

``bash 
cd ../server
npm run dev 
cd ../client
npm start ``
<br/>
That's it! You can now access the application at `http://localhost:3000/`. If you have any questions or would like to contribute to the project, please fork the repository and submit a pull request with your changes. The project is licensed under the MIT License. Thank you for using the Memories Full Stack MERN Application!