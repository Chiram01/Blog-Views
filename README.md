# Blog-views

## Introduction

The "Blog-Views" project is a web application designed for creating and managing blog posts. It uses MongoDB as the database, Node.js with Express for the server, and EJS for templating views.The application is structured with directories for public assets, server-side code, and views.

## Features
- Create, edit, and delete blog posts.
- View all posts on a single page.
- Responsive design.

### The main Technology used here are:

- MongoDB: For database management.
- Node.js: For server-side scripting.
- Express: As a web framework.
- EJS (Embedded JavaScript): For templating views.
- CSS: For styling.

The application is structured with directories for public assets, server-side code, and views. Key files like app.js handle the main application logic, routing, and database interactions, while package.json manages dependencies.
## Create .env file
Create a .env file to store your credentials. Example below:

```
MONGODB_URI=mongodb+srv://<username>:<password>@clusterName.xxxxxxx.mongodb.net/blog
JWT_SECRET=MySecretBlog
```
MONGODB_URI=mongodb+srv://chirasmitacd21:Chiras2003@cluster0.vf33i1y.mongodb.net/?retryWrites=true&w=majority
{my MongoDb URL}

## Installation
To install and run this project - install dependencies using npm and then start your server:

```
$ npm install
$ npm run dev


```
## Features
- public/: Static assets (CSS, images).
- views/: EJS templates.
- routes/: Route definitions.
- models/: Mongoose models.


![Screenshot 2024-02-16 230236](https://github.com/Chiram01/sipassignment/assets/139802844/115d756a-87dd-44e9-9823-1cd7c1018492)
![Screenshot 2024-02-16 230213](https://github.com/Chiram01/sipassignment/assets/139802844/cc23e263-7a5e-41bf-8f1c-167228ed1e60)
![Screenshot 2024-02-16 230307](https://github.com/Chiram01/sipassignment/assets/139802844/63134807-c3e8-4885-b2d9-ba9b4e1f8bfd)
![Screenshot 2024-02-16 230323](https://github.com/Chiram01/sipassignment/assets/139802844/bc2ebd71-0a17-40d0-9238-0659c5f6f991)

## License
This project is licensed under the MIT License
