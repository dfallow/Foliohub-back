# FolioHub REST API

## API Reference version 1.0

#### Login

```http
    POST /auth/login
```
```http
    Content-type: application/json
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `username` | `email` | **Required** |
| `password`    | `string` | **Required** |

Response:

```json
{
    "user": {
        "userId": 5,
        "username": "Sam Hämäläinen",
        "email": "samhamal@metropolia.fi",
        "title": "Developer",
        "creationDate": "1997-10-02",
        "github": "http://www.github.com",
        "description": "Currently a student studying Web development",
        "tags": "Web,JavaScript,Node,HTML,CSS",
        "profilePic": "e3ecc26bc5db61b70abd2779da5d731b",
        "role": 0
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjUsInVzZXJuYW1lIjoiU2FtIEjDpG3DpGzDpGluZW4iLCJlbWFpbCI6InNhbWhhbWFsQG1ldHJvcG9saWEuZmkiLCJ0aXRsZSI6IkRldmVsb3BlciIsImNyZWF0aW9uRGF0ZSI6IjE5OTctMTAtMDIiLCJnaXRodWIiOiJodHRwOi8vd3d3LmdpdGh1Yi5jb20iLCJkZXNjcmlwdGlvbiI6IiIsInRhZ3MiOiIiLCJwcm9maWxlUGljIjoiZTNlY2MyNmJjNWRiNjFiNzBhYmQyNzc5ZGE1ZDczMWIiLCJyb2xlIjowLCJpYXQiOjE2Mzk1NjY0NjZ9.RHr3isCNhgr4eta2F-U8z6lc2r_Qt7cY4kKQs5MVyEc"
}
```

#### Logout

```http
    GET /auth/logout
```

```http
    Authorization: Bearer token
```

Response:

```json
{
    "message": "logged out"
}
```

#### Check token 

```http
  GET /user/token
```

```http
  Authorization: Bearer token
```

Response:
```json
{
    "user": {
        "userId": 5,
        "username": "Sam Hämäläinen",
        "email": "samhamal@metropolia.fi",
        "title": "Developer",
        "creationDate": "1997-10-02",
        "github": "http://www.github.com",
        "description": "",
        "tags": "",
        "profilePic": "e3ecc26bc5db61b70abd2779da5d731b",
        "role": 0,
        "iat": 1639589663
    }
}
```

#### Register new user

```http
    POST /user
```

```http
    Content-type: multipart/form-data
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `username`     | `string` | **Required, max 30 characters** |
| `passwd`    | `string` | **Required, min length 8 characters, at least one capital letter, one lower case and one number** |
| `email` | `email` | **Required, email** |
| `title` | `string` | **Max 15 characters** |
| `creationDate` | `timestamp` | **Required, comes automatically when posted** |
| `github` | `string` | **Formatted as URL** |
| `description` | `string` | **Max 60 characters** |
| `tags` | `string` | **Max 159 characters, 10 tags, 15 characters per tag, plus 9 possible commas** |

Response:

```json
{
    "message": "User created with id: 80"
}
```

#### Get all users 

```http
    GET /user
```

```http
    Content-type: application/json
```

Response:

```json
[
    {
        "userId": 3,
        "username": "souly",
        "password": "souly",
        "email": "souly@metropolia.fi",
        "title": "Mascot",
        "creationDate": "2022-09-09 00:00:00",
        "github": null,
        "description": null,
        "tags": null,
        "profilePic": null,
        "role": 0
    },
    {
        "userId": 5,
        "username": "Sam Hämäläinen",
        "password": "sam123",
        "email": "samhamal@metropolia.fi",
        "title": "Developer",
        "creationDate": "1997-10-02 00:00:00",
        "github": "http://www.github.com",
        "description": "",
        "tags": "",
        "profilePic": "e3ecc26bc5db61b70abd2779da5d731b",
        "role": 0
    },
    {
        "userId": 7,
        "username": "souly2",
        "password": "souly",
        "email": "souly2@metropolia.fi",
        "title": "noob",
        "creationDate": "2021-12-02 00:00:00",
        "github": "",
        "description": "",
        "tags": "",
        "profilePic": "",
        "role": 0
    },
    ...
]
```

#### Get one user 

```http
    GET /user/:id
```

```http
    Content-type: application/json
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `int` | **Required**. Id of user to fetch |

```json
{
    "userId": 5,
    "username": "Sam Hämäläinen",
    "email": "samhamal@metropolia.fi",
    "title": "Developer",
    "creationDate": "1997-10-02 00:00:00",
    "github": "http://www.github.com",
    "description": "",
    "tags": "",
    "profilePic": "e3ecc26bc5db61b70abd2779da5d731b",
    "role": 0
}
```

#### Delete user

```http
    DELETE /user
```

```http
    Authorization: Bearer token
```

Response:

```json
    "message": "User deleted"
```

#### Update user

```http
    PUT /user
```

```http
    Authorization: Bearer token
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `username`      | `string` | Can be modified if user wishes |
| `title`      | `string` | Can be modified if user wishes |
| `github`      | `string` | Can be modified if user wishes |
| `description`      | `string` | Can be modified if user wishes |
| `tags`      | `string` | Can be modified if user wishes |
| `profilePic`      | `string` | Can be modified if user wishes |

Response:

```json
    "message": "User updated with id: 80"
```

#### Get all projects 

```http
    GET /project
```

```http
    Content-type: application/json
```

Response:

```json
[
    {
        "id": 75,
        "name": "test thumb",
        "date": "2021-12-15 13:28:17",
        "description": "",
        "video": "",
        "images": "3524e40f6d9cd5c8eb74fc7a1e90cfd6,543fbd04bfbe5ba9333706f42793ff86,66fa117f103de5d004e38bae1549d1db,          d846b8c154120e16cb7f499d2fcd92ff,79b7f9caf29834d813d4dc934cfe3a1b,6ee9818104f154f6b498499b8266520e",
        "outline": "",
        "logo": "ce405956b12bc902a223c6eccb07c2a6",
        "tags": "",
        "author": 62,
        "private": 0
    },
    {
        "id": 74,
        "name": "Bezos or Pezos?",
        "date": "2021-12-15 12:16:30",
        "description": "",
        "video": "",
        "images": null,
        "outline": "",
        "logo": "492bdab0bc6c9303718e226372e6b03e",
        "tags": "",
        "author": 58,
        "private": 0
    },
    ...
]
```

#### Get one project

```http
    GET /project/:id
```

```http
    Content-type: application/json
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `int` | **Required**. Id of project to fetch |

Response:

```json
    {
    "id": 74,
    "name": "Bezos or Pezos?",
    "date": "2021-12-15 12:16:30",
    "description": "",
    "video": "",
    "images": null,
    "outline": "",
    "logo": "492bdab0bc6c9303718e226372e6b03e",
    "tags": "",
    "author": 58,
    "private": 0
}
```

#### Update project

```http
    PUT /project/personal/:id
```

```http
    Authorization: Bearer token
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `int` | **Required**. Id of project to update |

Response:

```json
{
    "message": project updated true
}
```

#### Delete project

```http
    DELETE /project/personal/:id
```

```http
    Authorization: Bearer token
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `int` | **Required**. Id of project to delete |

Response:

```
{
    "message": "project deleted successfully true"
}
```

#### Post project 

```http
    POST /project/personal/
```

```http
    Authorization: Bearer token
```

```http
    Content-type: multipart/form-data
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`     | `string` | **Required** |
| `date` | `timestamp` | **Required, YYYY-MM-DD** |
| `description`    | `string` | ** ** |
| `video`       | `string` | **Link to youtube** |
| `images`       | `string` | **jpg, png, gif** |
| `outline`       | `string` | **Max 60 characters** |
| `logo`       | `string` | **jpg, png, gif** |
| `tags`       | `string` | **Max 159 characters, 10 tags, 15 characters per tag, 9 possible commas** |
| `author`       | `string` | **Required, from userId** |
| `private`       | `int` | **Required, 0 public, 1 private** |

#### Get all comments for project

```http
    GET /project/comments/:id
```

```http
    Authorization: Bearer token
```

```http
    Content-type: application/json
```

Response:

```json
[
    {
        "commentId": 3,
        "userId": 5,
        "projectId": 33,
        "comment": "Test2",
        "timeStamp": "2021-12-12 17:29:54",
        "username": "Sam Hämäläinen",
        "profilePic": "e3ecc26bc5db61b70abd2779da5d731b"
    },
    {
        "commentId": 1,
        "userId": 23,
        "projectId": 33,
        "comment": "First test comment",
        "timeStamp": "2021-12-12 17:29:47",
        "username": "grumpycat",
        "profilePic": "6d96631d299a8b1c88ea35340d48063e"
    }
]
```

#### Post a comment on project

```http
    POST /project/comments
```

```http
    Authorization: Bearer token
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `userId`      | `int` | **Required, id of user commenting** |
| `projectId`      | `int` | **Required, id of selected project** |
| `comment`      | `string` | **Required** |
| `timeStamp`      | `timestamp` | **Required** |

Response:

```json
{
    "message": "Comment added with id 76"
}
```

#### Delete comment from project

```http
    DELETE /project/comments
```

```http
    Authorization: Bearer token
```

Response:

```json
{
    "message": "project comment deleted successfully true"
}
```

#### Get total rating on project

```http
    GET /project/projectRating/:projectId
```

```http
    Content-type: application/json
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `projectId`      | `int` | **Required, id of selected project** |

Response: 

```json
{
    "rating": "1"
}
```

#### Giving a rating to project

```http
    POST /project/projectRating/:projectId
```

```http
    Authorization: Bearer token
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `userId`      | `int` | **Required, id of user giving rating** |
| `projectId`      | `int` | **Required, id of selected project** |
| `rating`      | `int` | **Required, given rating** |

Response:

```json
{
    "message": "Rating added true"
}
```

#### Updating rating on project

```http
    PUT /project/projectRating/:projectId
```

```http
    Authorization: Bearer token
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `userId`      | `int` | **Required, id of user giving rating** |
| `projectId`      | `int` | **Required, id of selected project** |
| `rating`      | `int` | **Required, given rating** |

Response:

```json
{
    "message": "project rating updated true"
}
```

#### Getting personal rating given on project

```http
    GET /project/projectRating/own/:projectId
```

```http
    Authorization: Bearer token
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `projectId`      | `int` | **Required, id of selected project** |

Response:

```json
{
    "rating": -1
}
```

#### Get all projects admin

```http
    GET /project/admin
```

```http
    Authorization: Bearer token
```

Response:

```json
[
    {
        "id": 77,
        "name": "Postman",
        "date": "2021-12-16 19:03:51",
        "description": "Testing routes on postman",
        "video": "juldrxDrSH0",
        "images": "b0e5255f1ab69cf73e58e84df30697d3,a8bf904ed956efae7076225a825b9eda",
        "outline": "Testing routes on postman",
        "logo": "c9a8ad1c304cd4751c9b37fd71a303fc",
        "tags": "",
        "author": 58,
        "private": 1,
        "comments": 0,
        "rating": "0"
    },
    {
        "id": 75,
        "name": "is it working ",
        "date": "2021-12-16 18:09:08",
        "description": "pls work",
        "video": "w7x_lWJNnNg",
        "images": "87093d64aeb5ea9eb43ef516e5004bfe,9db2c23232253945b5fc912f4de54f95,266a6f509507fd88dfa39e25c994609e,ec3550d0ea673ef05ad9faf95eafaca6",
        "outline": "by admin",
        "logo": "ac04cbc25b7aef5fa095c846715b19b9",
        "tags": "",
        "author": 62,
        "private": 1,
        "comments": 5,
        "rating": "-2"
    },
    {
        "id": 89,
        "name": "FolioHub",
        "date": "2021-12-16 12:50:32",
        "description": "",
        "video": "",
        "images": null,
        "outline": "",
        "logo": "9c0ffc4514c6c46772659cccecf2a8cf",
        "tags": "",
        "author": 24,
        "private": 0,
        "comments": 1,
        "rating": "1"
    },
    ...
]
```

#### Post a project as admin

```http
    POST /project/admin/
```

```http
    Authorization: Bearer token
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `name`     | `string` | **Required** |
| `date` | `timestamp` | **Required, YYYY-MM-DD** |
| `description`    | `string` | ** ** |
| `video`       | `string` | **Link to youtube** |
| `images`       | `string` | **jpg, png, gif** |
| `outline`       | `string` | **Max 60 characters** |
| `logo`       | `string` | **jpg, png, gif** |
| `tags`       | `string` | **Max 159 characters, 10 tags, 15 characters per tag, 9 possible commas** |
| `author`       | `string` | **Required, from userId** |
| `private`       | `int` | **Required, 0 public, 1 private** |

Response:

```json
{
    "message": "Project added with id 81"
}
```

#### Get one project by id as admin

```http
    GET /project/admin/:projectId
```

```http
    Authorization: Bearer token
```

Response:

```json
{
    "id": 33,
    "name": "Not Instant gram",
    "date": "2021-12-01 00:00:00",
    "description": "good app",
    "video": "",
    "images": "eb3c1da6005a04e68ca4e2d8c63d9d7a",
    "outline": "Post pictures of yourself",
    "logo": "93a6888ab10d2d3e55c33e7e81d56913",
    "tags": "",
    "author": 5,
    "private": 0
}
```

#### Delete project as admin

```http
    DELETE /project/admin/:projectId
```

```http
    Authorization: Bearer token
```

Response:

```json
{
    "message": "project deleted successfully true"
}
```

#### Update project as admin

```http
    GET /project/admin/:projectId
```

```http
    Authorization: Bearer token
```

Response:

```json
{
    "message": "project updated true"
}
```

#### Get all users as admin

```http
    GET /user/admin
```

```http
    Authorization: Bearer token
```

Response:

```json
[
    {
        "userId": 3,
        "username": "souly",
        "password": "souly",
        "email": "souly@metropolia.fi",
        "title": "Mascot",
        "creationDate": "2022-09-09 00:00:00",
        "github": null,
        "description": null,
        "tags": null,
        "profilePic": null,
        "role": 0
    },
    {
        "userId": 5,
        "username": "Sam Hämäläinen",
        "password": "sam123",
        "email": "samhamal@metropolia.fi",
        "title": "Developer",
        "creationDate": "1997-10-02 00:00:00",
        "github": "http://www.github.com",
        "description": "not so short",
        "tags": "coder,another",
        "profilePic": "e3ecc26bc5db61b70abd2779da5d731b",
        "role": 0
    },
    {
        "userId": 7,
        "username": "souly not 2",
        "password": "souly",
        "email": "souly2@metropolia.fi",
        "title": "admin did this haha",
        "creationDate": "2021-12-02 00:00:00",
        "github": null,
        "description": null,
        "tags": null,
        "profilePic": "",
        "role": 0
    },
    {
        "userId": 10,
        "username": "testing",
        "password": "testing",
        "email": "testing@testing.com",
        "title": "tester",
        "creationDate": "2021-12-06 00:00:00",
        "github": "",
        "description": "test",
        "tags": "",
        "profilePic": "C:\\fakepath\\cat.jpg",
        "role": 0
    },
    ...
]
```

#### Get one user as admin

```http
    GET /user/admin/:id
```

```http
    Authorization: Bearer token
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `userId`      | `int` | **Required, id of selected user** |

Response:

```json
{
    "userId": 3,
    "username": "souly",
    "email": "souly@metropolia.fi",
    "title": "Mascot",
    "creationDate": "2022-09-09 00:00:00",
    "github": null,
    "description": null,
    "tags": null,
    "profilePic": null,
    "role": 0
}
```

#### Delete a user as admin

```http
    DELETE /user/admin/:id
```

```http
    Authorization: Bearer token
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `userId`      | `int` | **Required, id of selected user** |

Response:

```json
{
    "message": "user deleted"
}
```

#### Update user as admin

```http
    PUT /user/admin/:id
```

```http
    Authorization: Bearer token
```


| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `username`      | `string` | Can be modified if admin wishes |
| `title`      | `string` | Can be modified if admin wishes |
| `github`      | `string` | Can be modified if admin wishes |
| `description`      | `string` | Can be modified if admin wishes |
| `tags`      | `string` | Can be modified if admin wishes |
| `profilePic`      | `string` | Can be modified if admin wishes |

Response:

```json
{
    "message": "User updated with id: 7"
}
```

#### Deleting comments as admin

```http
    DELETE /project/comments/admin
```

```http
    Authorization: Bearer token
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `commentId`      | `int` | **Required, id of selected comment** |

Response:

```json
{
    "message": "project comment deleted successfully true"
}
```
