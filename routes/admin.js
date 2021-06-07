const express = require("express");

const path = require("path");
const adminController = require("../controllers/admin");

const route = express.Router();

route.get("/add-project", adminController.getAddProject);

route.post("/add-project", adminController.postProject);

route.get("/projects", adminController.getProjects)


exports.route = route;

