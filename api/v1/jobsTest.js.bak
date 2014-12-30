"use strict";

var Assert = require("assert");
var Client = require("./../../index");

describe("[jobs]", function() {
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

it("should successfully execute GET /jobs/:job-id (get)",  function(next) {
    client.jobs.get(
        {
                "job-id": "String",
                "url-field-selector": "String"
            },
        function(err, res) {
            Assert.equal(err, null);
            // other assertions go here
            next();
        }
    );
});

it("should successfully execute GET /people/~/job-bookmarks (getCurrentBookmarks)",  function(next) {
    client.jobs.getCurrentBookmarks(
        {
                "url-field-selector": "String"
            },
        function(err, res) {
            Assert.equal(err, null);
            // other assertions go here
            next();
        }
    );
});

it("should successfully execute POST /people/~/job-bookmarks (bookmark)",  function(next) {
    client.jobs.bookmark(
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

it("should successfully execute DELETE /people/~/job-bookmarks/:job-id (removeBookmark)",  function(next) {
    client.jobs.removeBookmark(
        {
                "job-id": "String"
            },
        function(err, res) {
            Assert.equal(err, null);
            // other assertions go here
            next();
        }
    );
});

it("should successfully execute GET people/~/suggestions/job-suggestions:(jobs) (getCurrentSuggestions)",  function(next) {
    client.jobs.getCurrentSuggestions(
        {
                "job-id": "String"
            },
        function(err, res) {
            Assert.equal(err, null);
            // other assertions go here
            next();
        }
    );
});

it("should successfully execute POST /jobs (add)",  function(next) {
    client.jobs.add(
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

it("should successfully execute PUT /jobs (update)",  function(next) {
    client.jobs.update(
        {
                "partner-job-id": "String",
                "data": "Json"
            },
        function(err, res) {
            Assert.equal(err, null);
            // other assertions go here
            next();
        }
    );
});

it("should successfully execute DELETE /jobs (remove)",  function(next) {
    client.jobs.remove(
        {
                "partner-job-id": "String"
            },
        function(err, res) {
            Assert.equal(err, null);
            // other assertions go here
            next();
        }
    );
});

it("should successfully execute GET /job-search (search)",  function(next) {
    client.jobs.search(
        {
                "keywords": "String",
                "company-name": "String",
                "job-title": "String",
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
