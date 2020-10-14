const express = require("express");
const router = express.Router();
const {
    signup,
    signin,
    getMyUser,
    logout,
    logoutAll,
} = require("../controllers/user");
const { isAuth } = require("../middlewares/auth");

router.post("/signup", signup);
router.post("/signin", signin);
router.get("/users/me", isAuth, getMyUser);
router.post("/logout", isAuth, logout);
router.post("/logoutAll", isAuth, logoutAll);

module.exports = router;
