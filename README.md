# FolioHub (Backend)

This is the backend for visual project sharing application FolioHub.

## Installing the package

Clone the repository:
```
Clone with https:
git clone https://gitlab.metropolia.fi/foliohub/foliohub.git
```
To install all dependencies required in package.json run:
```
npm install
```
In the root directory, create a .env file:
```
DB_HOST=<server-ip-address>
DB_USER=<mariadb-username>
DB_PASS=<mariadb-password>
DB_NAME=<mariadb-database-name>
JWT_SECRET=secret
```
To create the required tagles execute the SQL script found in `setup.sql` which will create the database foliodb\

To start the server:
```
cd back
nodemon app.js
```
## Contributors

| Name | Email |
| ---  | ---   |
| David Fallow | davidfa@metropolia.fi |
| Sam Hämäläinen | sam.hamalainen@metropolia.fi | 
| Soulyvanh Phetsarath | soulyvanh.phetsarath@metropolia.fi |
