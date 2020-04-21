const express = require("express");
const fs = require("fs");

const app = express();

app.use((request, response, next) => {
  let nowDate = new Date();
  let hour = nowDate.getHours();
  let minutes = nowDate.getMinutes();
  let seconds = nowDate.getSeconds();
  let data = `${hour}:${minutes}:${seconds} ${request.method} ${
    request.url
  } ${request.get("user-agent")}`;
  console.log(data);
  fs.appendFile("server.log", data + "\n", () => {});
  next();
});

app.get("/", (request, response) => {
  response.send("Hello");
});

app.listen(3000);

// app.use((request, response, next) => {
//   console.log("Middleware 1");
//   next();
// });

// app.use((request, response, next) => {
//   console.log("Middleware 2");
//   next();
// });

// app.use("/about", (request, response, next) => {
//   console.log("About Middleware");
//   response.send("About Middleware");
// });

// app.get("/", (request, response) => {
//   console.log("Route /");
//   response.send("Hello");
// });

// app.listen(3000);
