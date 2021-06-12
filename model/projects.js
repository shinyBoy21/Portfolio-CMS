const fs = require("fs");
const path = require("path");

//here we will represent a single entity
//we'll be using a new gen JS class to define the SHAPE of our project

//const projects = [];
const filePath = path.join(__dirname, "../", "data", "projects.json");

const getProjectFromFile = (cb) => {
  fs.readFile(filePath, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

class Project {
  //let's then create our constructor function
  constructor(id, title, imgURL, year, description) {
    this.id = id;
    this.title = title;
    this.imgURL = imgURL;
    this.year = year;
    this.description = description;
  }
  // after this i create an object related to this class
  // we use a save method in our class to save every single project in our array
  save() {
    getProjectFromFile((projects) => {
      if (this.id) {
        const existingProjectIndex = projects.findIndex(
          (project) => project.id === this.id
        );
        const updatedProjects = [...projects];
        updatedProjects[existingProjectIndex] = this;
        fs.writeFile(filePath, JSON.stringify(updatedProjects), (err) => {
          console.log(err);
        });
      } else {
        this.id = Math.random().toString();
        projects.push(this);
        fs.writeFile(filePath, JSON.stringify(projects), (err) => {
          console.log(err);
        });
      }
    });
  }

  // to retrieve all projects, we use a fetch method
  //"static" key Word helps us to make use we call the "fetchALL" method directly on the CLASS
  //...and not on an instantiated object

  static deleteById(id) {
    getProjectFromFile((projects) => {
      const updatedProject = projects.filter((p) => p.id !== id);
      fs.writeFile(filePath, JSON.stringify(updatedProject), (err) => {
        if (err) {
          console.log(err);
        }
      });
    });
  }

  static fetchAll(cb) {
    getProjectFromFile(cb);
  }

  static findById(id, cb) {
    getProjectFromFile((projects) => {
      const project = projects.find((p) => p.id === id);
      cb(project);
    });
  }
}

module.exports = Project;

// getProjectFromFile((projects) => {
//   projects.push(this);
//   fs.writeFile(filePath, JSON.stringify(projects), (err) => {
//     console.log(err);
//   });
// });
// fs.readFile(filePath, (err, fileContent) => {
//   if (this.id) {
//     const existingProjectIndex = projects.findIndex(
//       (project) => project.id === this.id
//     );
//     const updatedProjects = [...project];
//     updatedProjects[existingProjectIndex] = this;
//     fs.writeFile(filePath, JSON.stringify(updatedProjects), (err) => {
//       console.log(err);
//     });
//   } else {
//     let projects = [];
//     this.id = Math.random().toString();

//     if (!err) {
//       //here i'll get 'json' and parse it(take json and gives js array or object thanks to PARSE method)
//       projects = JSON.parse(fileContent);
//     }
//     projects.push(this);
//     fs.writeFile(filePath, JSON.stringify(projects), (err) => {
//       console.log(err);
//     });
//   }
// });
