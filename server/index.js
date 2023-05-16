const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDatabase = require("./config/MongoDb.js");
// const { errorHandler, notFound } = require("./Middleware/Errors.js");

const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const stripeRoute = require("./routes/stripe");

dotenv.config();
connectDatabase();

const app = express();

app.use(cors());
app.use(express.json());

//API
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);

// ERROR HANDLER
// app.use(notFound);
// app.use(errorHandler);

const PORT = process.env.PORT || 1000;
app.listen(PORT, console.log(`server run in port ${PORT}`));