const User = require("../models/User");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();

//UPDATE

//DELETE

//GET USER

//GET ALL USER
router.get("/", (req, res) => {
    
});

//GET USER STATS

module.exports = router;