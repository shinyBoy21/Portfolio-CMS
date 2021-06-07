const fs = require("fs");
const Project = require("../model/projects.js");

exports.getProjects = (req, res) => {
  Project.fetchAll((projects) => {
    //console.log(projects);
    res.render("projects/projects", {
      projects: projects,
      title: "Projects",
      path: "/",
    });
  });
};

exports.getAProject = (req, res) => {
  const projectId = req.params.projectId;
  //console.log(projectId);
  Project.findById(projectId, (project) => {
    console.log("result from my query :", project);
    res.render("projects/project-detail", {
      project: project,
      path: "/",
    });
  });

  // Project.fetchAll((projects) => {
  //   console.log(projects);
  //   res.render("projects/projects", {
  //     projects: projects,
  //     title: "Projects",
  //     path: "/",
  //   });
  // });
};
