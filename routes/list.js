const express = require("express");
const path = require("path");
const adminData = require("./admin.js");

const projects = adminData.projects;

const route = express.Router();

route.get("/", (req, res) => {
  console.log(projects);
  res.sendFile(path.join(__dirname, "../", "views", "projects.html"));
});

module.exports = route;
