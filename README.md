# Yawp Restaurant Reviews

## Demo

[Link to Demo]()

## Getting Started

Use [this template](https://github.com/alchemycodelab/backend-express-template) to get started.

### Learning Objectives

- Create a functioning CRUD backend with authentication, authorization, protected and public routes

### Description

You are the new developer for Yawp - a hot new Restaurant review app. The lead developer is a React developer and has created a list of required endpoints for you to build out.

### Rubric

| Route                                      | Description               | Notes                                                                            | Points |
| ------------------------------------------ | ------------------------- | -------------------------------------------------------------------------------- | ------ |
| `POST /api/v1/users`                       | Creates a new user        | Should error if the email already exists <br> Should immediately log in the user | 2      |
| `POST /api/v1/users/sessions`              | Logs in an existing user  | Should error if email / password don't match                                     | 2      |
| `GET /api/v1/users`                        | Shows list of users       | Protected, must be admin                                                         | 2      |
| `GET` /api/v1/restaurants                  | Shows list of restaurants | Not Protected                                                                    | 2      |
| `GET` /api/v1/restaurants/:restId          | Shows restaurant detail   | Not Protected, Includes nested list of reviews                                   | 3      |
| `POST` /api/v1/restuarants/:restId/reviews | Creates a new review      | Protected, defaults user_id to the logged in user                                | 3      |
| `DELETE` /api/v1/reviews/:id               | Deletes a review          | Protected -- must be an admin or the user who created the review                 | 2      |
| Commit history showing vertical approach   |                           |                                                                                  | 4      |
