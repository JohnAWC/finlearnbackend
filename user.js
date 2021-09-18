const data = require("./data");
const database = require("./database");
const express = require("express");

let router = express.Router();

router.get("/user/all", (request, response) => {
  // let users = data.get_all_users();
  // response.status(200).send(users);
  database.connection.query("select * from user", (errors, results) => {
    if (errors) {
      console.log(errors);
      response.status(500).send("Some internal error occurred");
    } else {
      response.status(200).send(results);
    }
  });
});

router.get("/user/by-uid", (request, response) => {
  if (request.query.uid == null || request.query.uid.length == 0) {
    response.status(400).send("Invalid uid passed in the parameters");
  }

  // let user = data.get_user_by_user_id(request.query.uid);
  // response.status(200).send(user);
  database.connection.query(
    `select * from user where id = ${request.query.uid}`,
    (errors, results) => {
      if (errors) {
        console.log(errors);
        response.status(500).send("Some internal error occurred");
      } else {
        response.status(200).send(results);
      }
    }
  );
});

router.post("/user/add", (request, response) => {
  let user = request.body;
  if (JSON.stringify(user) === "{}") {
    response.status(400).send("Request's body content is invalid!");
  }

database.connection.query(
  `insert into user (name,email,age,wallet,signupdate) 
  values ('${request.body.name}','${request.body.email}','${request.body.age}','10',now())`,
  (errors, results) => {
    if (errors) {
      console.log(errors);
      response.status(500).send("Some internal error occurred");
    } else {
      response.status(200).send("Successfully added the user");
    }
  }
);
});

module.exports = { router };