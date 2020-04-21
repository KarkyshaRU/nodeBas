const Emitter = require("events");
let eventName = "greet";

class User extends Emitter {
  sayHi(data) {
    this.emit(eventName, data);
  }
}

let user = new User();
user.on(eventName, data => {
  console.log(data);
});

// вызовется всего один раз
user.once(eventName, () => {
  console.log("First call");
});

user.sayHi("I need your cloth");
user.emit("greet", "Hi");

/* Programm #1
const Emitter = require("events");
let emitter = new Emitter();
let eventName = "greet";

// связывание с событием №1
emitter.on(eventName, text => {
  console.log(text);
});

// герирация события и вызов функции
emitter.emit(eventName, "Hello world");
*/
