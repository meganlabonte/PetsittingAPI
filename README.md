# Petsitting Locations API

This is a simple API for managing locations of my petsitting business. Using it should make updating, creating, deleting and viewing the locations of my petsits easier. My API is built using Node.js and Express.js, and it connects to a MySQL database holding my petsit locations.

## Installation Requirements

To run this project, you need to have the following installed:

- Node.js (v12 or higher)
- MySQL (v5.7 or higher)

## Setting Up the Project

Please download the files and make sure you have installed the correct dependencies using 'npm install' in your terminal. You should also download the correct packages:

<img width="629" alt="Installing packages" src="https://github.com/meganlabonte/CFG-Assignments/assets/107578187/ecdb770b-69a0-44ae-b1a3-ccb82f1038e5">


## Configuration

Create a .env file in the root directory of the project and add your own MySQL credentials in the following format: 

`DB_HOST=localhost
DB_USER=your_mysql_username
DB_PASSWORD=your_mysql_password
DB_NAME=petsitting`

## Running the server

To run the server, use 'node index.js'

<img width="439" alt="Running server and cancelling connection" src="https://github.com/meganlabonte/CFG-Assignments/assets/107578187/6b6fa25e-a5c0-493d-8c34-10ba4fc0c931">

On port 3000, local host server should display the following welcome message: 

<img width="322" alt="Manually testing connection" src="https://github.com/meganlabonte/CFG-Assignments/assets/107578187/a7c47414-5ef7-42b5-9b60-51889f3a62a7">

Below are some of the expected results using the application Postman to test:
<img width="1226" alt="testing with Postman" src="https://github.com/meganlabonte/CFG-Assignments/assets/107578187/f51b87ac-e1b8-440e-a7db-80ba07ade388">
<img width="1222" alt="Error resolved" src="https://github.com/meganlabonte/CFG-Assignments/assets/107578187/fca0a3cb-e40f-4aec-82b0-8a4778002c1b">

Please ensure you have correctly allowed access for your SQL account to avoid this error:

<img width="1228" alt="Error correctly displayed in Postman" src="https://github.com/meganlabonte/CFG-Assignments/assets/107578187/282a2315-90a2-4cca-b832-7fbfafc6f7e7">

## The endpoints

Retrieving all locations should result in the following:

`[
  {
    "id": 1,
    "name": "John Doe",
    "area": "London",
    "distance": 15
  },
  {
    "id": 2,
    "name": "Jane Smith",
    "area": "Manchester",
    "distance": 35
  },
  {
    "id": 3,
    "name": "Alice Brown",
    "area": "Bristol",
    "distance": 20
  }
]
`

Creating a new location should result in the following response: 

`{
  "id": 4,
  "message": "Location for John Doe created successfully"
}`

Deleting a location should result in the following:

`{
  "message": "Location deleted successfully"
}`

### Resouces used to complete this project

- https://www.youtube.com/watch?v=ENrzD9HAZK4
- https://stackoverflow.com/questions/48605484/environment-variables-env-in-node-js-express
- CFG Recordings and slides
- https://www.postman.com 







