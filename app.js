const express = require("express");
var app = express();
var path = require("path");

const model = require('./js/model.js');
const view = require('./js/view.js');

app.get("/", (req, res) => {
    view.getTemplate();
    res.sendFile(path.join(__dirname + "/index.html"));
});

app.get("/data", (req, res) => {
    res.json(model.data);
})

// redirect assets folder
app.use('/assets', express.static(__dirname + '/assets'));

app.listen(process.env.PORT || 8080);

module.exports = {
    app
}