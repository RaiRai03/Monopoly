"use strict";
Object.defineProperty(exports,"__esModule", { value: true });
var express_1 = require("express");
var app = (0, express_1.default)();
var PORT = 6001;
app.get("/", function (rep, res) {
    res.send("hello world with typescript except the build keeps breaking");
});
app.listen(PORT, function () { return console.log("app is listening on ".concat(PORT)); });
