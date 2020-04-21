const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("HOME");
});

// абсолюьная переадресация
app.use("/index", (request, response) => {
  response.redirect("http://google.com");
});

// относительная переадресация
app.use("/home", (request, response) => {
  response.redirect("/");
});

app.listen(3000);
