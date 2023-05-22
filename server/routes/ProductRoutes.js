const express = require("express")
const asyncHandler = require("express-async-handler");
const { HashRouter } = require("react-router-dom");
const Product = require("../models/ProductModel")
// const { admin, protect } = require("./../Middleware/AuthMiddleware.js");

const router = express.Router();

//GET ALL PRODUCT
router.get("/", asyncHandler(async (req, res) => {
    const pageSize = 5;
    const page = Number(req.query.pageNumber) || 1;
    const keyword = req.query.keyword
      ? {
          name: {
            $regex: req.query.keyword,
            $options: "i",
          },
        }
      : {};
    const count = await Product.countDocuments({ ...keyword });
    const products = await Product.find({ ...keyword })
      .limit(pageSize)
      .skip(pageSize * (page - 1))
      .sort({ _id: -1 });
    res.json({ products, page, pages: Math.ceil(count / pageSize) });
  })
);

// ADMIN GET ALL PRODUCT WITHOUT SEARCH AND PEGINATION
// router.get(
//   "/all",
//   protect,
//   admin,
//   asyncHandler(async (req, res) => {
//     const products = await Product.find({}).sort({ _id: -1 });
//     res.json(products);
//   })
// );

//GET SINGlE PRODUCT
router.get("/:id", asyncHandler(async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      res.status(200).json(product);
    } catch (err) {
      res.status(500).json(err);
    }
  })
);

//CREATE
router.post("/", async (req, res) => {
    const newProduct = new Product(req.body);
  
    try {
      const savedProduct = await newProduct.save();
      res.status(200).json(savedProduct);
    } catch (err) {
      res.status(500).json(err);
    }
});

//UPDATE
router.put("/:id", async (req, res) => {
    try {
      const updatedProduct = await Product.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedProduct);
    } catch (err) {
      res.status(500).json(err);
    }
});

//DELETE
router.delete("/:id", asyncHandler(async (req, res) => {
    try {
      await Product.findByIdAndDelete(req.params.id);
      res.status(200).json("Product has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
  })
);

module.exports = router;