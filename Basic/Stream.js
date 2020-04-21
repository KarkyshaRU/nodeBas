const fs = require("fs");

// создание потока записи
let writeableStream = fs.createWriteStream("stream.html");
writeableStream.write("<h1>Привет мир!</h1>\n");
writeableStream.write("<h2>Продолжение записи...</h2>\n");
// окончаниея записи
writeableStream.end("<h3>Завершение записи</h3>");

// создание потока чтения
let readableStream = fs.createReadStream("stream.html", "utf8");

// чтение по строке
readableStream.on("data", chanck => {
  console.log(chanck);
});
