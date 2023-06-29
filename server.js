const express = require("express");
const path = require("path");
const usersRouter = require("./routes/users.router");
const postsRouter = require("./routes/posts.router");
const { default: mongoose } = require("mongoose");
const productsRouter = require("./routes/products.router");

const app = express();

const PORT = 3000;

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

app.use("/static", express.static(path.join(__dirname, "public")));

app.use(express.json());

mongoose
  .connect("mongodb+srv://yuhyeon:12341234@express-cluster.zyrmgqs.mongodb.net/?retryWrites=true&w=majority")
  .then(() => console.log("mongodb conneted"))
  .catch((err) => console.log(err));

app.use((req, res, next) => {
  const start = Date.now();
  console.log(`${req.method} ${req.url}`);
  next();
  const diffTime = Date.now() - start;
  console.log(`${req.method} ${req.baseUrl}${req.url} ${diffTime}ms`);
});

app.get("/", (req, res) => {
  res.render("index", {
    imageTitle: "It is a forest",
  });
});

app.use("/users", usersRouter);
app.use("/posts", postsRouter);
app.use("/products", productsRouter);

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}...`);
});
