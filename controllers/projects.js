const fs = require("fs");
const Project = require("../model/projects.js");

exports.getAddProject = (req, res) => {
  console.log(`in the first middleware`);
  //res.sendFile(path.join(__dirname, "..", "views", "add-project.html"));
  res.render("add-project", {
    title: "Add Project",
    path: "/admin/add-project",
  });
  //console.log(path.join(__dirname,'../','views','add-product.html'))
  // next();
};

exports.postProject = (req, res) => {
  const project = new Project(req.body.title);
  project.save();
  //projects.push({ title: req.body.title });
  console.log(project);
  console.log(req.body);
  fs.writeFileSync("outcome.txt", req.body.title);
  res.redirect("/");
};

exports.getProjects = (req, res) => {
  Project.fetchAll((projects) => {
    console.log(projects);
    res.render("projects", {
      projects: projects,
      title: "Projects",
      path: "/",
    });
  });
};
