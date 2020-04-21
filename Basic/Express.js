// get module Express
const express = require("express");

// crete app
const app = express();

// listener for '/'
app.get("/", (request, response) => {
  response.end("Hello Kate!");
});

// listen in port 3000;
app.listen(3000);
