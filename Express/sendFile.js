const express = require("express");
const app = express();

// app.use("/", (req, res) => {
//   res.sendFile(__dirname + "/index.html");
// });

app.use("/home/123", (req, res) => {
  res.sendStatus(404).send("Ресурс не найден");
});

app.listen(3000);
