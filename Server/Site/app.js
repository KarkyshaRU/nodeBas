const http = require("http");
const fs = require("fs");

http
  .createServer((request, response) => {
    console.log("Url: " + request.url);

    const filePath = request.url.substr(1);
    console.log(filePath);
    fs.access(filePath, fs.constants.R_OK, err => {
      if (err) {
        response.statusCode = 404;
        response.end("Resourse not found!");
      } else {
        fs.createReadStream(filePath).pipe(response);
      }
    });
  })
  .listen(3000, () => {
    console.log("Server started at 3000");
  });
