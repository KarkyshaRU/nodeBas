const express = require("express");

const app = express();

app.get("/", (request, response) => {
  response.send("<h2>Привет Express!</h2>");
});

app.get("/about", (request, response) => {
  response.send("<h2>About site</h2>");
});

app.get("/contacts", (request, response) => {
  response.send("<h2>Contacts</h2>");
});
app.listen(3000);
