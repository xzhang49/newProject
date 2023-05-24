import express from "express"

import users from ".Users.js"
import products from ".Products.js"

import User from "../models/UserModel"
import Product from "../models/ProductModel"

import asyncHandler from "express-async-handler"

const ImportData = express.Router();

ImportData.post(
  "/user",
  asyncHandler(async (req, res) => {
    await User.remove({});
    const importUser = await User.insertMany(users);
    res.send({ importUser });
  })
);

ImportData.post(
  "/products",
  asyncHandler(async (req, res) => {
    await Product.remove({});
    const importProducts = await Product.insertMany(products);
    res.send({ importProducts });
  })
);

export default ImportData;