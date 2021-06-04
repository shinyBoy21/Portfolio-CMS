const path = require("path");
const express = require("express");
const PORT = process.env.PORT || 3000;
const admin = require("./routes/admin");
const projects = require("./routes/list.js");
const errorController = require("./controllers/error");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

//app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

app.set("view engine", "ejs");
app.set("views", "views");

app.use("/admin", admin.route);
app.use(projects);

app.use(errorController.get404);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
