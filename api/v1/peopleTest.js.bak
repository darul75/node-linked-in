"use strict";

var Assert = require("assert");
var Client = require("./../../index");

describe("[people]", function() {
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

it("should successfully execute GET /people/~ (getCurrent)",  function(next) {
    client.people.getCurrent(
        {
                "url-field-selector": "String",
                "secure-urls": "Boolean"
            },
        function(err, res) {
            Assert.equal(err, null);
            // other assertions go here
            next();
        }
    );
});

it("should successfully execute GET /people/ (getMember)",  function(next) {
    client.people.getMember(
        {
                "id": "String",
                "url": "String",
                "url-field-selector": "String",
                "secure-urls": "Boolean"
            },
        function(err, res) {
            Assert.equal(err, null);
            // other assertions go here
            next();
        }
    );
});

it("should successfully execute GET /people/~/connections (getCurrentConnections)",  function(next) {
    client.people.getCurrentConnections(
        {
                "start": "Number",
                "count": "Number",
                "modified": "String",
                "modified-since": "Number",
                "url-field-selector": "String"
            },
        function(err, res) {
            Assert.equal(err, null);
            // other assertions go here
            next();
        }
    );
});

it("should successfully execute GET /people/:idOrUrl/connections (getMemberConnections)",  function(next) {
    client.people.getMemberConnections(
        {
                "idOrUrl": "String",
                "start": "Number",
                "count": "Number",
                "modified": "String",
                "modified-since": "Number"
            },
        function(err, res) {
            Assert.equal(err, null);
            // other assertions go here
            next();
        }
    );
});

it("should successfully execute GET /people-search (search)",  function(next) {
    client.people.search(
        {
                "keywords": "String",
                "first-name": "String",
                "last-name": "String",
                "company-name": "String",
                "current-company": "String",
                "title": "String",
                "current-title": "String",
                "school-name": "String",
                "current-school": "String",
                "country-code": "String",
                "postal-code": "String",
                "distance": "String",
                "facet": "String",
                "facets": "String",
                "start": "Number",
                "count": "Number",
                "sort": "String",
                "url-field-selector": "String"
            },
        function(err, res) {
            Assert.equal(err, null);
            // other assertions go here
            next();
        }
    );
});
});
