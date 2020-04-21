const http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    fs.readFile("index.html", "utf8", (error, data) => {
      let header = "Главная страница";
      let subheader = "Изучаем NodeJS";

      data = data.replace("{header}", header).replace("{subheader}", subheader);
      res.end(data);
    });
  })
  .listen(3000);
