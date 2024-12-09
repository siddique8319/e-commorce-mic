const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const cors = require("cors");

const app = express();
app.use(cors());

app.use("/products", createProxyMiddleware({ target: "https://localhost:3001", changeOrigin: true }));
app.use("/cart", createProxyMiddleware({ target: "https://localhost:3002", changeOrigin: true }));

app.listen(4000, () => console.log("API Gateway running on port 4000"));
