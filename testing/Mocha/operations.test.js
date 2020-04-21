let operations = require("./operations");
let assert = require("assert");

it("should multiply two numbers", () => {
  let expectedResult = 15;
  let result = operations.multiply(3, 5);

  assert.equal(result, expectedResult);
});

it("should add two numbers", () => {
  let expectedResult = 9;
  let result = operations.add(4, 5);

  if (result !== expectedResult) {
    throw new Error(`Expected ${expectedResult}, but got ${result}`);
  }
});

it("should async multiply two numbers", done => {
  let expectedResult = 9;
  operations.multiplyAsunc(3, 3, result => {
    if (result !== expectedResult) {
      throw new Error(`Expected ${expectedResult}, but got ${result}`);
    }
    done();
  });
});
