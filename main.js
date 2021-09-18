const express = require("express");
const user = require("./user");
const account = require("./account");

server = express();
server.use(express.json());

server.use(user.router);
server.use(account.router);

server.listen(3000);




























// const express = require("express");
// const req = require("express/lib/request");

// server = express();
// server.use(express.json()); // so it can interpret json

// // Creating the mapping table
// router = express.Router();
// router.get("/", (request, response) => {
//   response.status(200).send("Hello!");
// });

// router.get("/greet", (request, response) => {
//   let name = request.query.name;
//   response.status(200).send(`Hello, ${name}!`);
// });

// router.get("/sum", (request, response) => {
//   let sum = parseInt(request.query.x) + parseInt(request.query.y);
//   response.status(200).send(`Sum is: ${sum}`);
// });

// router.post("/post-example", (request, response) => {
//   // We will assume that data is coming in request's body in JSON format.
//   let name = request.body.name;
//   let age = request.body.age;

//   response.status(200).send(`Received Name: ${name} and Age: ${age}`);
// });

// // router.delete()

// server.use(router);

// server.listen(3000);