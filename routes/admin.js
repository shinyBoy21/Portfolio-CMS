const express = require("express");
const fs = require("fs");

const route = express.Router();

route.get("/add-project", (req, res) => {
  console.log(`in the first middleware`);
  res.send(
    '<form action="/admin/add-project" method = POST><input type = "text" name="name"/><button type="submit">Add Project</button></form>'
  );
  // next();
});

route.post("/add-project", (req, res) => {
  console.log("body:", req.body);
  fs.writeFileSync("outcome.txt", req.body.name);
  res.redirect("/");
});

module.exports = route;
