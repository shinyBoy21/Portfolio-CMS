const fs = require("fs");

const projects = [];

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
  projects.push({ title: req.body.title });
  console.log(projects);
  //console.log(req.body);
  fs.writeFileSync("outcome.txt", req.body.title);
  res.redirect("/");
};

exports.getProjects = (req, res) => {
  console.log(projects);
  //res.sendFile(path.join(__dirname, "../", "views", "projects.html"));
  res.render("projects", { title: "Projects", projects: projects, path: "/" });
};

exports.projects = projects;
