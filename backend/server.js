const express = require("express");
const app = express();
const path = require("path" );
const cors = require("cors");
const dotenv = require("dotenv");
const { connectDB } = require("./config/db");
const colors = require("colors");
const { products } = require("./data/products");
const productRoutes = require("./routes/productRoutes").router;
const {
  notFound,
  errorHandler,
} = require("./middleware/errorMiddleware").errorMiddleware;

dotenv.config();

// Database Connection
connectDB();

app.use(cors());
app.use(express.json());

// Routes
app.get("/api/products/", (req, res) => {
  res.status(200).json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.status(200).json(product);
});

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT;

app.listen(5000, () => {
  console.log(`Working in ${process.env.NODE_ENV} on port: ${PORT}`.blue.bold);
});
