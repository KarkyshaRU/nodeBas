function User(name, age) {
  this.name = name;
  this.age = age;
  this.displayInfo = () => {
    console.log(`Name: ${this.name} Age: ${this.age}`);
  };
}

User.prototype.sayHi = function() {
  console.log("Hi, I`m " + this.name);
};

let eugen = new User("Artem ", 17);

console.log(User.prototype);
eugen.sayHi();
eugen.displayInfo();
