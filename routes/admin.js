const express = require("express");

const path = require("path");
const projectsController = require("../controllers/projects.js");

const route = express.Router();

route.get("/add-project", projectsController.getAddProject);

route.post("/add-project", projectsController.postProject);

exports.route = route;

