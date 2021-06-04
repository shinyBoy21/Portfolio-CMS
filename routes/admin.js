const express = require("express");
const fs = require("fs");
const path = require("path");

const route = express.Router();
const projects = [];

route.get("/add-project", (req, res) => {
  console.log(`in the first middleware`);
  res.sendFile(path.join(__dirname, "..", "views", "add-project.html"));
  res.render("add-project", {
    title: "Add Project",
    path: "/admin/add-project",
  });
  //console.log(path.join(__dirname,'../','views','add-product.html'))
  // next();
});

route.post("/add-project", (req, res) => {
  projects.push({ title: req.body.title });
  console.log(projects);
  //console.log(req.body);
  fs.writeFileSync("outcome.txt", req.body.title);
  res.redirect("/");
});

exports.route = route;
exports.projects = projects;
