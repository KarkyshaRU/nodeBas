let display = (data, callback) => {
  let randInt = Math.random() * (10 - 1) + 1;
  let err = randInt > 5 ? new Error("Ошибка выполнения. RandInt > 5") : null;

  setTimeout(() => {
    callback(err, data);
  }, 0);
};

console.log("Начало работы программы");

display("Обратока данных...", (err, data) => {
  if (err) throw err;
  console.log(data);
});

console.log("Завершание работы программы");
