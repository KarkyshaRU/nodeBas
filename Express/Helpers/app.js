const express = require("express");
const hbs = require("hbs");

const app = express();

// var handlebars = require("express-handlebars").create({
//   layoutsDir: "views/layouts",
//   partialsDir: "views/partials",
//   defaultLayout: "layout",
//   extname: "hbs"
// });

// app.engine("hbs", handlebars.engine);
app.set("view engine", "hbs");
app.set("views", "views");

hbs.registerHelper("getTime", () => {
  let now = new Date();
  let hour = now.getHours();
  let minute = now.getMinutes();
  let second = now.getSeconds();

  if (minute < 10) {
    minute = "0" + minute;
  }

  if (second < 10) {
    second = "0" + second;
  }

  return `Now: ${hour}:${minute}:${second}`;
});

// app.set("view engine", hbs);

app.get("/", (req, res) => {
  res.render("home.hbs");
});

app.listen(3000);
