const express = require("express");
const fs = require("fs");
const path = require("path");

const route = express.Router();

route.get("/add-project", (req, res) => {
  console.log(`in the first middleware`);
  res.sendFile(path.join(__dirname, "..", "views", "add-project.html"));
  //console.log(path.join(__dirname,'../','views','add-product.html'))
  // next();
});

route.post("/add-project", (req, res) => {
  console.log("body:", req.body);
  fs.writeFileSync("outcome.txt", req.body.title);
  res.redirect("/");
});

module.exports = route;
