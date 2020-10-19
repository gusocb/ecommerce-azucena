const User = require("../models/User");

exports.signup = async (req, res) => {
    const user = new User(req.body);

    try {
        await user.save();
        const token = await user.generateAuthToken();
        res.status(200).json({ user, token });
    } catch (err) {
        res.status(400).json({ err });
    }
};

exports.signin = async (req, res) => {
    try {
        const user = await User.findByCredentials(
            req.body.email,
            req.body.password
        );
        const token = await user.generateAuthToken();
        res.send({ user, token });
    } catch (err) {
        res.status(400).send();
    }
};

exports.getMyUser = (req, res) => {
    res.send(req.user);
};

exports.getAllUsers = async (req, res) => {
    try {
        const allUsers = await User.find()
        res.send(allUsers)
    } catch (err) {
        res.status(400).send()
    }
}

exports.logout = async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token !== req.token;
        });

        await req.user.save();
        res.send();
    } catch (err) {
        res.status(500).send();
    }
};

exports.logoutAll = async (req, res) => {
    try {
        req.user.tokens = []
        await req.user.save()
        res.send()
    } catch (error) {
        res.status(500).send()
    }
}