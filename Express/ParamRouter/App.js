const express = require("express");

const app = express();

app.get("/products/:category/:product", (req, res) => {
  res.send(
    `Category: ${req.params["category"]} Product: ${req.params["product"]}`
  );
});

app.listen(3000);
