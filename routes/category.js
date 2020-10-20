const express = require("express");
const router = express.Router();

const { create } = require("../controllers/category");
const { isAuth, isAdmin } = require("../middlewares/auth");

router.post("/category/create", isAuth, isAdmin, create);

module.exports = router;
