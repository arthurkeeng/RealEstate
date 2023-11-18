require("dotenv").config();
const express = require("express");
const connection = require("./db/connection");
const app = express();
const PORT = 4000;
const cors = require("cors");

const productRouter = require("./routes/productRouter");

const start = async () => {
  try {
    await connection(process.env.MONGO_URI);
    app.listen(PORT, () => console.log("server is running..."));
  } catch (error) {
    console.log("something happened");
  }
};

start();
app.use(cors());
app.use(express.json());
app.use("/api/v1/products", productRouter);