# 📖 Socialize API

---

## 📋 PROJECT SUMMARY

This Socialize project API is a RESTful API built using Node.js, Express, and Mongoose, designed to power a social media platform. With MongoDB as the underlying database, the API enables users to perform a variety of actions, from user authentication and registration to post creation and interaction.

### Available endpoints:

## Authentication

- **POST /auth/login**: Log in a user using username and password.
- **POST /auth/register**: Register a new user.

## User Operations

- **GET /user/:id**: Retrieve information about a specific user.
- **PUT /user/:id**: Update user details.
- **DELETE /user/:id**: Delete a user.
- **PUT /user/:id/follow**: Make a user follow another user.
- **PUT /user/:id/unfollow**: Make a user unfollow another user.

## Post Operations

- **POST /post**: Create a new post.
- **GET /post/:id**: Retrieve information about a specific post.
- **PUT /post/:id**: Update a post.
- **DELETE /post/:id**: Delete a post.
- **PUT /post/:id/react**: Change the reaction (like or dislike) of a post.
- **GET /post/:id/timeline**: Retrieve posts in the user's timeline, sorted by following status.

The Socialize API offers a comprehensive set of endpoints for building a social media platform, allowing users to connect, interact, and share content.

---

## 🛠️ How to clone repo, install dependencies.

### 1. Clone the repo

HTTP link to clone the repository:

```
https://github.com/TennoAndros/BE-MERN-Socialize
```

After clone is finished follow the next step.

### 2. Install dependencies

Navigate to that directory in your terminal and run the below command to install all of the dependencies needed as found in the package.json file.
The install command is: `npm i` .

This repo was created using:

**-Dependencies-**

| Package                | Version   | Usage                                     |
| :--------------------- | :-------- | :---------------------------------------- |
| <sub>bcrypt</sub>      | `^5.1.0`  | _Password hashing and authentication_     |
| <sub>body-parser</sub> | `^1.20.2` | _Parsing incoming request bodies_         |
| <sub>dotenv</sub>      | `^16.3.1` | _Managing environment variables_          |
| <sub>express</sub>     | `^4.18.2` | _Web application framework for routing_   |
| <sub>mongodb</sub>     | `^5.7.0`  | _Official MongoDB driver for Node.js_     |
| <sub>mongoose</sub>    | `^7.4.2`  | _ODM library for MongoDB interactions_    |
| <sub>nodemon</sub>     | `^3.0.1`  | _Development utility for auto-restarting_ |

---

## ⚙️ System Setup

The project was created using the listed versions of Node, MongoDB and npm:

- [Node](https://nodejs.org/en/) (version v18.17.0)
- [MongoDB](https://www.mongodb.com/) (version 6.0)
- [npm](https://www.npmjs.com/) (version 9.6.7)

It might work with other versions but they haven't been tested.
