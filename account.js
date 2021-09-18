const express = require("express");
const data = require("./data");

let router = express.Router();

router.get("/account/all", (request, response) => {
  let accounts = data.get_all_accounts();
  response.status(200).send(accounts);
});

router.get("/account/by-aid", (request, response) => {
  let account = data.get_account_by_account_id(request.query.aid);
  response.status(200).send(account);
});

router.post("/add-account", (request, response) => {
  let account = request.body;
  data.add_account(account);
  response.status(200).send("Success!");
});

module.exports = { router };