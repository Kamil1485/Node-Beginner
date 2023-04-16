// Imports
const express = require("express");
const expressLayouts = require("express-ejs-layouts");

const app = express();
const port = 5002;

// Static Files
app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));

// Set Templating Engine
app.use(expressLayouts);
app.set("layout", "./layouts/layout");
app.set("view engine", "ejs");

// Routes
app.get("/", (req, res) => {
  res.render("home", { title: "Home Page", header: "Welcome to Home" });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About Page", header: "Welcome to About" });
});
app.get("/contact", (req, res) => {
  res.render("contact", {
    title: "Contact Page",
    header: "Welcome to Contact",
  });
});

// Listen on Port 5000
app.listen(port, () => console.info(`App listening on port ${port}`));
//app.listen(...)=>express uygulamasının belirtilen portta otomatik olarak bir web sunucuu oluşturmasını sağlar. 