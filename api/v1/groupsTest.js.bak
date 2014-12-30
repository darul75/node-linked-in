"use strict";

var Assert = require("assert");
var Client = require("./../../index");

describe("[groups]", function() {
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

it("should successfully execute GET /groups/:group-id (getDetail)",  function(next) {
    client.groups.getDetail(
        {
                "group-id": "String",
                "url-field-selector": "String"
            },
        function(err, res) {
            Assert.equal(err, null);
            // other assertions go here
            next();
        }
    );
});

it("should successfully execute GET /people/~/group-memberships/:group-id (getMembershipDetail)",  function(next) {
    client.groups.getMembershipDetail(
        {
                "group-id": "String",
                "url-field-selector": "String"
            },
        function(err, res) {
            Assert.equal(err, null);
            // other assertions go here
            next();
        }
    );
});

it("should successfully execute GET /people/~/group-memberships (getMemberships)",  function(next) {
    client.groups.getMemberships(
        {
                "membership-state": "String",
                "start": "Number",
                "count": "Number",
                "url-field-selector": "String"
            },
        function(err, res) {
            Assert.equal(err, null);
            // other assertions go here
            next();
        }
    );
});

it("should successfully execute PUT /people/~/group-memberships/:group-id (updateMembership)",  function(next) {
    client.groups.updateMembership(
        {
                "group-id": "String",
                "data": "Json"
            },
        function(err, res) {
            Assert.equal(err, null);
            // other assertions go here
            next();
        }
    );
});

it("should successfully execute POST /people/~/group-memberships/ (updateMembershipFull)",  function(next) {
    client.groups.updateMembershipFull(
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

it("should successfully execute PUT /people/~/group-memberships/:group-id (join)",  function(next) {
    client.groups.join(
        {},
        function(err, res) {
            Assert.equal(err, null);
            // other assertions go here
            next();
        }
    );
});

it("should successfully execute POST /people/~/group-memberships (joinAdvanced)",  function(next) {
    client.groups.joinAdvanced(
        {},
        function(err, res) {
            Assert.equal(err, null);
            // other assertions go here
            next();
        }
    );
});

it("should successfully execute DELETE /people/~/group-memberships/:group-id (remove)",  function(next) {
    client.groups.remove(
        {
                "group-id": "String"
            },
        function(err, res) {
            Assert.equal(err, null);
            // other assertions go here
            next();
        }
    );
});

it("should successfully execute GET /groups/:group-id/posts (getPosts)",  function(next) {
    client.groups.getPosts(
        {
                "group-id": "String",
                "start": "Number",
                "count": "Number",
                "role": "String",
                "order": "String",
                "category": "Array",
                "url-field-selector": "String"
            },
        function(err, res) {
            Assert.equal(err, null);
            // other assertions go here
            next();
        }
    );
});

it("should successfully execute GET /people/~/group-memberships/:group-id/posts (getMembershipPosts)",  function(next) {
    client.groups.getMembershipPosts(
        {
                "group-id": "String",
                "start": "Number",
                "count": "Number",
                "role": "String",
                "order": "String",
                "category": "Array",
                "url-field-selector": "String"
            },
        function(err, res) {
            Assert.equal(err, null);
            // other assertions go here
            next();
        }
    );
});

it("should successfully execute GET /people/~/suggestions/groups/:group-id/posts (getSuggestionPosts)",  function(next) {
    client.groups.getSuggestionPosts(
        {
                "group-id": "String",
                "start": "Number",
                "count": "Number",
                "role": "String",
                "order": "String",
                "category": "Array",
                "url-field-selector": "String"
            },
        function(err, res) {
            Assert.equal(err, null);
            // other assertions go here
            next();
        }
    );
});

it("should successfully execute POST /groups/:group-id/posts (addPost)",  function(next) {
    client.groups.addPost(
        {
                "group-id": "String",
                "data": "Json"
            },
        function(err, res) {
            Assert.equal(err, null);
            // other assertions go here
            next();
        }
    );
});

it("should successfully execute GET /posts/:post-id (getPost)",  function(next) {
    client.groups.getPost(
        {
                "post-id": "String",
                "url-field-selector": "String"
            },
        function(err, res) {
            Assert.equal(err, null);
            // other assertions go here
            next();
        }
    );
});

it("should successfully execute GET /posts/:post-id/comments (getPostsComments)",  function(next) {
    client.groups.getPostsComments(
        {
                "group-id": "String",
                "post-id": "String",
                "start": "Number",
                "count": "Number",
                "url-field-selector": "String"
            },
        function(err, res) {
            Assert.equal(err, null);
            // other assertions go here
            next();
        }
    );
});

it("should successfully execute PUT /posts/:post-id/relation-to-viewer/is-liked (likePost)",  function(next) {
    client.groups.likePost(
        {
                "post-id": "String",
                "data": "Json"
            },
        function(err, res) {
            Assert.equal(err, null);
            // other assertions go here
            next();
        }
    );
});

it("should successfully execute PUT /posts/:post-id/relation-to-viewer/is-following (followPost)",  function(next) {
    client.groups.followPost(
        {
                "post-id": "String",
                "data": "Json"
            },
        function(err, res) {
            Assert.equal(err, null);
            // other assertions go here
            next();
        }
    );
});

it("should successfully execute PUT /posts/:post-id/category/code (flagPost)",  function(next) {
    client.groups.flagPost(
        {
                "post-id": "String",
                "data": "Json"
            },
        function(err, res) {
            Assert.equal(err, null);
            // other assertions go here
            next();
        }
    );
});

it("should successfully execute DELETE /posts/:post-id (removeFlagPost)",  function(next) {
    client.groups.removeFlagPost(
        {
                "post-id": "String"
            },
        function(err, res) {
            Assert.equal(err, null);
            // other assertions go here
            next();
        }
    );
});

it("should successfully execute GET /comments/:comment-id (getComment)",  function(next) {
    client.groups.getComment(
        {
                "comment-id": "String",
                "url-field-selector": "String"
            },
        function(err, res) {
            Assert.equal(err, null);
            // other assertions go here
            next();
        }
    );
});

it("should successfully execute POST /post/:post-id/comments (postComment)",  function(next) {
    client.groups.postComment(
        {
                "post-id": "String",
                "data": "Json"
            },
        function(err, res) {
            Assert.equal(err, null);
            // other assertions go here
            next();
        }
    );
});

it("should successfully execute DELETE /comments/:comment-id (deleteComment)",  function(next) {
    client.groups.deleteComment(
        {
                "comment-id": "String"
            },
        function(err, res) {
            Assert.equal(err, null);
            // other assertions go here
            next();
        }
    );
});

it("should successfully execute GET /people/~/suggestions/groups/ (getFromSuggestions)",  function(next) {
    client.groups.getFromSuggestions(
        {},
        function(err, res) {
            Assert.equal(err, null);
            // other assertions go here
            next();
        }
    );
});

it("should successfully execute DELETE /people/~/suggestions/groups/:id (removeSuggestions)",  function(next) {
    client.groups.removeSuggestions(
        {
                "id": "String"
            },
        function(err, res) {
            Assert.equal(err, null);
            // other assertions go here
            next();
        }
    );
});
});
