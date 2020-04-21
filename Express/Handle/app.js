const express = require("express");

const app = express();

// setup Handlebar
app.set("view engine", "hbs");

// path for views
app.set("views", "views");

app.use("/contact", (req, res) => {
  res.render(__dirname + "/views/contact.hbs", {
    title: "My contacts",
    email: "email@emali.com",
    phones: ["+1 234 456 78 90", "+7 423 323 54 23"]
  });
});

app.use("/", (req, res) => {
  res.send("Main page");
});

app.listen(3000);
