"use strict";

var Fs = require("fs");
var Util = require("./../../util");
var error = require("./../../error");

var GithubHandler = module.exports = function(client) {
    this.client = client;
    this.routes = JSON.parse(Fs.readFileSync(__dirname + "/routes.json", "utf8"));
};

var proto = {
    sendError: function(err, block, msg, callback) {
        if (this.client.debug)
            Util.log(err, block, msg.user, "error");
        if (typeof err == "string")
            err = new error.InternalServerError(err);
        if (callback)
            callback(err);
    }
};

[<%scripts%>].forEach(function(api) {
    Util.extend(proto, require("./" + api));
});

GithubHandler.prototype = proto;
