const { static } = require("express");
const express = require("express");
const fs = require("fs");
const PORT = process.env.PORT || 3000;
const admin = require("./routes/admin");
const projects = require("./routes/list.js");

const app = express();

app.use(static('views'))

//app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

app.use('/admin',admin);
app.use(projects);
app.use((req, res, next) => {
  res.status(404).send("<h1>Page not found</h1>");
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
