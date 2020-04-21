const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();

// создаем парсер
const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get("/register", urlencodedParser, (req, res) => {
  res.sendFile(__dirname + "/register.html");
});

app.post("/register", urlencodedParser, (req, res) => {
  if (!req.body) return res.sendStatus(400);
  console.log(req.body);

  let now = new Date();
  res.send(
    `[${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}] : ${
      req.body.userName
    } - ${req.body.userAge}`
  );
  fs.appendFile(
    `users[${now.getDay()}.${now.getMonth()}.${now.getFullYear()}].log`,
    `[${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}] 
    UserName: ${req.body.userName} - Age: ${req.body.userAge} - Email: ${
      req.body.userEmail
    } - Password: ${req.body.userPassword} \n`,
    () => {}
  );
});

app.get("/", (req, res) => {
  res.send("Main page");
});

app.listen(3000);
