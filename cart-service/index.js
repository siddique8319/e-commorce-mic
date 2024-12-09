const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let cart = [];

app.get("/cart", (req, res) => res.json(cart));
app.post("/cart", (req, res) => {
  cart.push(req.body);
  res.status(201).send("Added to cart");
});

app.listen(3002, () => console.log("Cart Service running on port 3002"));
