const express = require("express");
const app = express();

const productRouter = express.Router();

productRouter.use("/create", (req, res) => {
  res.send("Appand product");
});

productRouter.use("/:id", (req, res) => {
  res.send("Product: " + req.params["id"]);
});

productRouter.use("/", (req, res) => {
  res.send("Products");
});

app.use("/products", productRouter);

app.use("/about", (req, res) => {
  res.send("About site");
});

app.use("/", (req, res) => {
  res.send("Main page");
});

app.listen(3000);
