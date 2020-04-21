const fs = require("fs");

fs.readFile("hello.txt", "utf8", (error, data) => {
  console.log("Асинхронное чтение файла");
  if (error) throw error;
  console.log(data);
});

let fileContent = fs.readFileSync("hello.txt", "utf8");
console.log(fileContent);

fs.writeFileSync("hello.txt", "Артем Кака)");
fs.writeFile("hello.txt", "Hellooo", error => {
  if (error) throw error;
  console.log(
    "Асинхронная запись файла завершенаю. Содержимое файла: " +
      fs.readFileSync("hello.txt", "utf8")
  );
});

// write = перезаписывают файлы

fs.appendFileSync("hello.txt", "HellooooSync");
fs.appendFile("hello.txt", "HelloAsync", error => {
  if (error) throw error;
  console.log(
    "Запись файла завергина. Содержимое: " +
      fs.readFileSync("hello.txt", "utf8")
  );
});

// dell FILE
fs.unlinkSync("dar.txt");
fs.unlink("rer.txt", err => {
  if (err) console.log(err);
  else console.log("File was delered");
});
