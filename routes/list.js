const express = require("express");
const path = require("path");
const a = require("./admin.js");
const projectsController = require("../controllers/projects.js");

const projects = projectsController.projects;

const route = express.Router();

route.get("/", projectsController.getProjects);

module.exports = route;
