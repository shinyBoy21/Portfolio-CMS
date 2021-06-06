const fs = require("fs");
const path = require("path");

//here we will represent a single entity
//we'll be using a new gen JS class to define the SHAPE of our project

//const projects = [];
const filePath = path.join(__dirname, "../", "data", "projects.json");

class Project {
  //let's then create our constructor function
  constructor(title) {
    this.title = title;
  }
  // after this i create an object related to this class
  // we use a save method in our class to save every single project in our array
  save() {
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

  static fetchAll(callback) {
    fs.readFile(filePath, (err, fileContent) => {
      if (err) {
        callback([]);
      }
      callback(JSON.parse(fileContent));
    });
    //return projects;
  }
}

module.exports = Project;
