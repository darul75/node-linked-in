"use strict";

var Assert = require("assert");
var Client = require("./../../index");

describe("[companies]", function() {
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

it("should successfully execute GET /companies (all)",  function(next) {
    client.companies.all(
        {
                "url-field-selector": "String",
                "is-company-admin": "Boolean",
                "start": "Number",
                "count": "Number"
            },
        function(err, res) {
            Assert.equal(err, null);
            // other assertions go here
            next();
        }
    );
});

it("should successfully execute GET /companies/:company-id (get)",  function(next) {
    client.companies.get(
        {
                "company-id": "String"
            },
        function(err, res) {
            Assert.equal(err, null);
            // other assertions go here
            next();
        }
    );
});

it("should successfully execute GET /companies/ (getByUniversalName)",  function(next) {
    client.companies.getByUniversalName(
        {
                "universal-name": "String"
            },
        function(err, res) {
            Assert.equal(err, null);
            // other assertions go here
            next();
        }
    );
});

it("should successfully execute GET /companies (getByEmailDomain)",  function(next) {
    client.companies.getByEmailDomain(
        {
                "email-domain": "String"
            },
        function(err, res) {
            Assert.equal(err, null);
            // other assertions go here
            next();
        }
    );
});

it("should successfully execute GET /companies/:company-id/updates (getUpdate)",  function(next) {
    client.companies.getUpdate(
        {
                "company-id": "String",
                "event-type": "String",
                "start": "Number",
                "count": "Number"
            },
        function(err, res) {
            Assert.equal(err, null);
            // other assertions go here
            next();
        }
    );
});

it("should successfully execute GET /companies/:company-id/updates/key=:company-update-key/update-comments (getUpdateComments)",  function(next) {
    client.companies.getUpdateComments(
        {
                "company-id": "String",
                "company-update-key": "String",
                "event-type": "String"
            },
        function(err, res) {
            Assert.equal(err, null);
            // other assertions go here
            next();
        }
    );
});

it("should successfully execute GET /companies/:company-id/updates/key=:company-update-key/likes (getUpdateCommentsLike)",  function(next) {
    client.companies.getUpdateCommentsLike(
        {
                "company-id": "String",
                "company-update-key": "String",
                "event-type": "String"
            },
        function(err, res) {
            Assert.equal(err, null);
            // other assertions go here
            next();
        }
    );
});

it("should successfully execute POST /companies/:company-id/shares (addShare)",  function(next) {
    client.companies.addShare(
        {
                "company-id": "String",
                "data": "Json"
            },
        function(err, res) {
            Assert.equal(err, null);
            // other assertions go here
            next();
        }
    );
});

it("should successfully execute GET /companies/:company-id/is-company-share-enabled (getShareEnabled)",  function(next) {
    client.companies.getShareEnabled(
        {
                "company-id": "String"
            },
        function(err, res) {
            Assert.equal(err, null);
            // other assertions go here
            next();
        }
    );
});

it("should successfully execute GET /companies/:company-id/relation-to-viewer/is-company-share-enabled (getCurrentShareEnabled)",  function(next) {
    client.companies.getCurrentShareEnabled(
        {
                "company-id": "String"
            },
        function(err, res) {
            Assert.equal(err, null);
            // other assertions go here
            next();
        }
    );
});

it("should successfully execute GET /companies/:company-id/historical-follow-statistics (getHistoricalFollowersStatistics)",  function(next) {
    client.companies.getHistoricalFollowersStatistics(
        {
                "company-id": "String",
                "start-timestamp": "Number",
                "end-timestamp": "Number",
                "time-granularity": "String"
            },
        function(err, res) {
            Assert.equal(err, null);
            // other assertions go here
            next();
        }
    );
});

it("should successfully execute GET /companies/:company-id/historical-status-update-statistics (getHistoricalStatusUpdate)",  function(next) {
    client.companies.getHistoricalStatusUpdate(
        {
                "company-id": "String",
                "start-timestamp": "Number",
                "end-timestamp": "Number",
                "time-granularity": "String",
                "update-key": "String",
                "url-field-selector": "String"
            },
        function(err, res) {
            Assert.equal(err, null);
            // other assertions go here
            next();
        }
    );
});

it("should successfully execute GET /companies/:company-id/company-statistics (getStatistics)",  function(next) {
    client.companies.getStatistics(
        {
                "company-id": "String"
            },
        function(err, res) {
            Assert.equal(err, null);
            // other assertions go here
            next();
        }
    );
});

it("should successfully execute GET /companies/:company-id/num-followers (getNumFollowers)",  function(next) {
    client.companies.getNumFollowers(
        {
                "seniorities": "String",
                "geos": "String",
                "companySizes": "String",
                "jobFunc": "String",
                "industries": "String"
            },
        function(err, res) {
            Assert.equal(err, null);
            // other assertions go here
            next();
        }
    );
});

it("should successfully execute POST /people/~/network/updates/key=:update-key/update-comments (addShareComment)",  function(next) {
    client.companies.addShareComment(
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
    client.companies.likeShareComment(
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

it("should successfully execute PUT /companies/:company-id/updates/key=:update-key/update-comments-as-company/ (addUpdateComment)",  function(next) {
    client.companies.addUpdateComment(
        {
                "update-key": "String",
                "company-id": "String",
                "data": "Json"
            },
        function(err, res) {
            Assert.equal(err, null);
            // other assertions go here
            next();
        }
    );
});

it("should successfully execute GET /company-search (search)",  function(next) {
    client.companies.search(
        {
                "keywords": "String",
                "hq-only": "String",
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
