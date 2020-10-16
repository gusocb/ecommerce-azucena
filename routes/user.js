const express = require("express");
const router = express.Router();
const {
    signup,
    signin,
    getMyUser,
    logout,
    logoutAll,
    getAllUsers,
} = require("../controllers/user");
const { isAuth, isAdmin } = require("../middlewares/auth");

router.post("/signup", signup);
router.post("/signin", signin);
router.get("/users/me", isAuth, getMyUser);
router.get("/users/all", isAuth, isAdmin, getAllUsers);
router.post("/logout", isAuth, logout);
router.post("/logoutAll", isAuth, logoutAll);

module.exports = router;
