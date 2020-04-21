const express = require("express");

const app = express();

app.use("/static", express.static(__dirname + "/public"));

app.use("/", (req, res) => {
  res.send("<h1>Main page</h1>");
});

// // /bok /bk   ? => 0 or 1
// app.get("/bo?k", (req, res) => {
//   res.send(req.url);
// });

// // bok book booooooooook ...   + => 1 or ... !0
// app.get("/bo+k", (req, response) => {
//   response.send(req.url);
// });

// // bonk bordfdfok bo12345k
// app.get("/bo*k", (req, res) => {
//   res.send(req.url);
// });

app.listen(3000);
