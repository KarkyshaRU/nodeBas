const http = require("http"); //заргужаем модуль "http"
const infoOS = require("./InfoOS");

http
  //создаем сервер
  .createServer((request, response) => {
    response.end(infoOS.getMessage(infoOS.getNameUser()));
  })
  //начала прослушивания
  .listen(3000, "127.0.0.1", () => {
    console.log("Cервер начал прослушивание запромсво на порту 3000");
  });
