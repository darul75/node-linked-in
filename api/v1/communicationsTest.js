"use strict";

var Assert = require("assert");
var Client = require("./../../index");

describe("[communications]", function() {
    var client;
    var token = "c286e38330e15246a640c2cf32a45ea45d93b2ba";

    beforeEach(function() {
        client = new Client({
            version: "1"
        });
        client.authenticate({
            type: "oauth",
            token: token
        });
    });

it("should successfully execute POST /people/~/mailbox (sendInvitation)",  function(next) {
    client.communications.sendInvitation(
        {
                "data": "Json"
            },
        function(err, res) {
            Assert.equal(err, null);
            // other assertions go here
            next();
        }
    );
});
});
