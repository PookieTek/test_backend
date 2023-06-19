const Example = require("../models/example");

exports.function = (req, res, next) => {
    return res.status(201).json({ message: "ok" });
};