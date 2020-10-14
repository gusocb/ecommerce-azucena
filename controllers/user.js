const User = require("../models/User");

exports.signup = async (req, res) => {
    const user = new User(req.body);

    try {
        await user.save();
        const token = await user.generateAuthToken()
        res.status(200).json({ user, token });
    } catch (err) {
        res.status(400).json({ err });
    }
};

exports.signin = async (req, res) => {

    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken()
        res.send({user, token})
    } catch (err) {
        res.status(400).send()
    }

};
