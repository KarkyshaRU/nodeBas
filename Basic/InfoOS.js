const os = require("os");

let getNameUser = () => {
  return os.userInfo().username;
};
module.exports.getNameUser = getNameUser;

module.exports.getMessage = name => {
  let currentDate = new Date();
  let hour = currentDate.getHours();
  if (hour > 16) {
    return `Good evening, ${name}`;
  } else if (hour > 10) {
    return `Good afternoon, ${name}`;
  } else {
    return `Good morning, ${name}`;
  }
};
