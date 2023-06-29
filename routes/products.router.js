const express = require("express");
const productsController = require("../controllers/products.controller");
const productsRouter = express.Router();

productsRouter.post("/", productsController.createProduct);
productsRouter.get("/", productsController.getProducts);
productsRouter.get("/:productId", productsController.getProductById);

module.exports = productsRouter;
