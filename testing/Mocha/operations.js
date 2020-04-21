module.exports.multiply = (x, y) => x * y;
module.exports.add = (x, y) => x + y;

module.exports.multiplyAsunc = (a, b, callback) => {
  setTimeout(() => {
    callback(a * b);
  }, 1000);
};
