"use strict";

var Assert = require("assert");
var Client = require("./../../index");

describe("[share]", function() {
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

it("should successfully execute POST /people/~/shares (add)",  function(next) {
    client.share.add(
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

it("should successfully execute GET /people/~/network/updates (getNetworksUpdates)",  function(next) {
    client.share.getNetworksUpdates(
        {
                "scope": "String",
                "type": "String",
                "start": "Number",
                "count": "Number",
                "after": "Number",
                "before": "Number",
                "show-hidden-members": "String",
                "url-field-selector": "String"
            },
        function(err, res) {
            Assert.equal(err, null);
            // other assertions go here
            next();
        }
    );
});

it("should successfully execute GET /people/~/network/network-stats (getNetworksStats)",  function(next) {
    client.share.getNetworksStats(
        {},
        function(err, res) {
            Assert.equal(err, null);
            // other assertions go here
            next();
        }
    );
});

it("should successfully execute GET /people/~/network/updates/key=:update-key/update-comments (getNetworksUpdatesComments)",  function(next) {
    client.share.getNetworksUpdatesComments(
        {
                "update-key": "String"
            },
        function(err, res) {
            Assert.equal(err, null);
            // other assertions go here
            next();
        }
    );
});

it("should successfully execute GET /people/~/network/updates/key=:update-key/likes (getNetworksUpdatesLike)",  function(next) {
    client.share.getNetworksUpdatesLike(
        {
                "update-key": "String"
            },
        function(err, res) {
            Assert.equal(err, null);
            // other assertions go here
            next();
        }
    );
});

it("should successfully execute POST /people/~/network/updates/key=:update-key/update-comments (addShareComment)",  function(next) {
    client.share.addShareComment(
        {
                "update-key": "String",
                "data": "Json"
            },
        function(err, res) {
            Assert.equal(err, null);
            // other assertions go here
            next();
        }
    );
});

it("should successfully execute PUT /people/~/network/updates/key=:update-key/is-liked (likeShareComment)",  function(next) {
    client.share.likeShareComment(
        {
                "update-key": "String",
                "data": "Json"
            },
        function(err, res) {
            Assert.equal(err, null);
            // other assertions go here
            next();
        }
    );
});

it("should successfully execute PUT /people/~/person-activities (postNetworkUpdate)",  function(next) {
    client.share.postNetworkUpdate(
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
