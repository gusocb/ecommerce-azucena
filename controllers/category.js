const Category = require("../models/category");

exports.create = async (req, res) => {
    const category = new Category(req.body);
    try {
        await category.save();
        res.send(category);
    } catch (err) {
        res.status(400).send({ error: "Couldn't create category" });
    }
};
