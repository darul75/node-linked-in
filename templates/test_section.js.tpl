"use strict";

var Assert = require("assert");
var Client = require("./../../index");

describe("[<%sectionName%>]", function() {
    var client;
    var token = "c286e38330e15246a640c2cf32a45ea45d93b2ba";

    beforeEach(function() {
        client = new Client({
            version: "<%version%>"
        });
        client.authenticate({
            type: "oauth",
            token: token
        });
    });

<%testBody%>
});
