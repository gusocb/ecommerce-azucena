const jwt = require("jsonwebtoken");
const User = require("../models/User");

exports.isAuth = async (req, res, next) => {
    try {
        const token = req.header("Authorization").replace("Bearer ", "");
        const decoded = jwt.verify(token, "thisismysecret");
        const user = await User.findOne({
            _id: decoded._id,
            "tokens.token": token,
        });

        if (!user) {
            throw new Error();
        }
        req.user = user;
        req.token = token;
        next();
    } catch (err) {
        res.status(401).send({ error: "Not authenticated, please login" });
    }
};

exports.isAdmin = (req, res, next) => {
    try {
        if (req.user.role !== 1) {
            throw new Error();
        }
        next()
    } catch (err) {
        res.status(401).send({ error: "Not an admin. Go back" });
    }
};
