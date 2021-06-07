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
  constructor(title, imgURL, year, description) {
    this.title = title;
    this.imgURL = imgURL;
    this.year = year;
    this.description = description;
  }
  // after this i create an object related to this class
  // we use a save method in our class to save every single project in our array
  save() {
    this.id = Math.random().toString();
    fs.readFile(filePath, (err, fileContent) => {
      let projects = [];
      if (!err) {
        //here i'll get 'json' and parse it(take json and gives js array or object thanks to PARSE method)
        projects = JSON.parse(fileContent);
      }
      projects.push(this);
      fs.writeFile(filePath, JSON.stringify(projects), (err) => {
        console.log(err);
      });
    });

    //projects.push(this); // refers to "this.title"
  }

  // to retrieve all projects, we use a fetch method
  //"static" key Word helps us to make use we call the "fetchALL" method directly on the CLASS
  //...and not on an instantiated object

  static fetchAll(cb) {
    // fs.readFile(filePath, (err, fileContent) => {
    //   if (err) {
    //     callback([]);
    //   }
    //   callback(JSON.parse(fileContent));
    // });
    getProjectFromFile(cb);
    //return projects;
  }

  static findById(id, cb) {
    getProjectFromFile((projects) => {
      const project = projects.find((p) => p.id === id);
      cb(project);
    });
  }
}

module.exports = Project;
