const express = require("express");
const expressHbs = require("express-handlebars");
const hbs = require("hbs");

const app = express();

app.engine(
  "hbs",
  expressHbs({
    layoutsDir: "views/layouts",
    defaultLayout: "layout",
    extname: "hbs"
  })
);

hbs.registerPartials(__dirname + "/particls");

// setup Handlebar
app.set("view engine", "hbs");

// path for views

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
