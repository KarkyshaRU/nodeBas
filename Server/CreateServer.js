const http = require("http");

/*
request: инфа о запросе(header, method, url)


response: поток для отправки ответа(status code, statusMessage, setHeader(name, value), wrtite, writeHead, end)
*/

http
  .createServer((request, response) => {
    console.log("Url: " + request.url);
    console.log("Тип запроса: " + request.method);
    console.log("User-Agent: " + request.headers["user-agent"]);
    console.log("Все заголовки: " + request.headers);

    response.setHeader("UserId", 12);
    response.setHeader("Content-Type", "text/html; charset=utf8");

    response.write("<!DOCTYPE html>");
    response.write("<html>");

    response.write("<head>");
    response.write("<title>Hello Node</title>");
    response.write('<meta charset="utf8" />');
    response.write("</head>");

    response.write("<body>");
    response.write("<h1>Привет!</h1>");
    if (request.url == "/home" || request.url == "/") {
      //   response.statusCode = 301;
      response.setHeader("Location", "/about");
    } else if (request.url == "/about") {
      response.write("<h2>About</2>");
    } else {
      response.statusCode = 404;
      response.write("<h2>ERRORO 404! Not found</2>");
    }
    response.write("</body>");
    response.write("</html>");
    response.end();
  })
  .listen(3000);
