const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");

app = express();
let jsonParser = bodyParser.json();

app.use(express.static(__dirname + "/public"));

app.get("/api/users", (req, res) => {
  let content = fs.readFileSync("users.json", "utf8");
  let users = JSON.parse(content);
  res.send(users);
});

app.get("/api/users/:id", (req, res) => {
  let id = req.params.id;
  let content = fs.readFileSync("users.json", "utf8");
  let users = JSON.parse(content);
  let user = null;

  users.forEach(element => {
    if (element.id == id) {
      user = element;
      // break;
    }
  });

  if (user) {
    res.send(user);
  } else {
    res.status(404).send();
  }
});

app.post("/api/users", jsonParser, (req, res) => {
  if (!req.body) return res.sendStatus(400);

  let userName = req.body.name;
  let userAge = req.body.age;
  let user = { name: userName, age: userAge };

  let data = fs.readFileSync("users.json", "utf8");
  let users = JSON.parse(data);

  let id = Math.max.apply(
    Math,
    users.map(o => o.id)
  );
  user.id = id + 1;

  users.push(user);
  data = JSON.stringify(users);

  fs.writeFileSync("users.json", data);
  res.send(user);
});

app.delete("/api/users/:id", (req, res) => {
  let id = req.params.id;
  let data = fs.readFileSync("users.json", "utf8");
  let users = JSON.parse(data);
  let index = -1;

  for (let i = 0; i < users.length; i++) {
    if (users[i].id == id) {
      index = i;
      break;
    }
  }

  if (index > -1) {
    let user = users.splice(index, 1)[0];
    let data = JSON.stringify(usres);
    fs.writeFileSync("users.json", data);
    res.send(user);
  } else {
    res.status(404).send();
  }
});

app.put("/api/users", jsonParser, (req, res) => {
  if (!req.body) return res / sendStatus(400);

  let userId = req.body.id;
  let userName = req.body.name;
  let userAge = req.body.age;

  let data = fs.readFileSync("users.json", "utf8");
  let users = JSON.parse(data);

  let user;
  for (let i = 0; i < users.length; i++) {
    if (users[i].id == userId) {
      user = users[i];
      break;
    }
  }

  if (user) {
    user.age = userAge;
    user.name = userName;
    let data = JSON.stringify(users);
    fs.writeFileSync("users.json", data);
    res.send(user);
  } else {
    res.status(404).send(user);
  }
});

app.listen(3000);
