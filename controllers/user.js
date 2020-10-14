const User = require("../models/User");

exports.signup = (req, res) => {
    const user = new User(req.body);
    user.save()
        .then((user) => {
            res.status(200).json({ user });
        })
        .catch((err) => {
            res.status(400).json({ err });
        });
};

exports.signin = (req, res) => {
    User.findByCredentials(req.body.email, req.body.password)
        .then((user) => {
            res.send(user);
        })
        .catch((e) => {
            res.status(400).send();
        });
};
