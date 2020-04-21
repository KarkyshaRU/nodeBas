const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Main page</h1>");
});

app.use("/about", (req, res) => {
  let id = req.query.admin.id;
  let nameAdmin = req.query.admin.name;

  let names = req.query.names;

  let UlNames = "<ul>";
  names.forEach(name => {
    UlNames += `<li>${name}</li>`;
  });
  UlNames += "</ul>";

  res.send(`<h1>INFORMATION</h1><p>id=${id} name=${nameAdmin}</p> ${UlNames}`);
});

app.listen(3000);
