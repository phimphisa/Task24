const express = require("express");
var app = express();
var path = require("path");

const model = require('./js/model.js');

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/index.html"));
});

app.get("/data", (req, res) => {
    res.json(model.data);
})

app.listen(process.env.PORT || 8080);

module.exports = {
    app
}