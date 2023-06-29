const express = require("express");
const productsController = require("../controllers/products.controller");
const productsRouter = express.Router();

// productsRouter.post("/", productsController.createProduct);
productsRouter.post("/", productsController.createProduct);

module.exports = productsRouter;
