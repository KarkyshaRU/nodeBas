const express = require("express");
const hbs = require("hbs");
const app = express();

// setup Handlebar
app.set("view engine", "hbs");

// path for views
app.set("views", "views");

hbs.registerPartials(__dirname + "/views/particls");

app.use("/contact", (req, res) => {
  res.render("contact", {
    title: "My contacts",
    email: "email@emali.com",
    phones: ["+1 234 456 78 90", "+7 423 323 54 23"]
  });
});

app.use("/", (req, res) => {
  res.render("home.hbs");
});

app.listen(3000);
