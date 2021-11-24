const express = require("express");
//creating app
const app = express();

app.set("view engine", "ejs");

//send the index.html when receiving HTTP GET /
app.get("/", (req, res) => {
  res.render("index", { root: __dirname });
});

//route for contacts
app.get("/contacts", (req, res) => {
  res.render("contacts");
});

//route for login
app.get("/login", (req, res) => {
  res.render("login");
});

//route for register
app.get("/register", (req, res) => {
  res.render("register");
});

//send public to client?
app.use(express.static("public"));

//make the app listen on port
const port = process.argv[2] || process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`Cart app listening at http://localhost:${port}`);
});
