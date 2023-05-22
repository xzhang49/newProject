const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDatabase = require("./config/MongoDb.js");
// const { errorHandler, notFound } = require("./Middleware/Errors.js");

const authRoute = require("./routes/AuthRoutes");
const userRoute = require("./routes/UserRoutes");
const productRoute = require("./routes/ProductRoutes");
const cartRoute = require("./routes/CartRoutes");
const orderRoute = require("./routes/OrderRoutes");
const stripeRoute = require("./routes/StripeRoute");
const { errorHandler, notFound } = require("./Middleware/Errors.js");

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
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 1000;
app.listen(PORT, console.log(`server run in port ${PORT}`));