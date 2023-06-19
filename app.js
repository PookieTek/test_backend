const express = require("express");
var cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const exampleRoutes = require("./routes/example");

const app = express();
mongoose
    .connect("mongodb://localhost:27017/example", {
        useNewUrlParser: true,
        useFindAndModify: false,
        promiseLibrary: global.Promise,
        useUnifiedTopology: true,
    })
    .then(() => console.log("Connexion à MongoDB réussie !"))
    .catch(() => console.log("Connexion à MongoDB échouée !"));

app.use(express.static(__dirname + "/views/"));
app.use(express.static("public"));
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, PATCH, OPTIONS"
    );
    next();
});
app.use("/uploads", express.static("/uploads"));
app.use("/api/example", exampleRoutes);
app.get("*", function (req, res) {
    res.sendFile(__dirname + "/views/index.html");
});
module.exports = app;
