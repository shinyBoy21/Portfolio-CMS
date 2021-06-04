const path = require("path");
const express = require("express");
const PORT = process.env.PORT || 3000;
const admin = require("./routes/admin");
const projects = require("./routes/list.js");

const app = express();

app.use(express.static(path.join(__dirname,'public')))

//app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

app.use("/admin", admin);
app.use(projects);
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
