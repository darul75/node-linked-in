var http = require("http");
var Url = require("url");
var querystring = require("querystring");
var queue = require("queue-async");

var Client = require("../index");
var OAuth2 = require("oauth").OAuth2;

var linkedin = new Client({
  version: "1",
  pathPrefix:"v1"  
});

// var linkedin = new Client({
//   version: "1",
//   pathPrefix:"v1",
//   proxy: {
//     host: '10.115.100.103',
//     port: 8080
//   }
// });

var clientId = "7782fkexleri0s";
var secret = "29X0lbFr6GvoJM8S";
var oauth = new OAuth2(clientId, secret, "https://www.linkedin.com/", "uas/oauth2/authorization", "uas/oauth2/accessToken");
// oauth.setTunnel({
//   proxy: {
//     host: '10.115.100.103',
//     port: 8080
//   }
// });

// for demo purposes use one global access token
// in production this has to be stored in a user session
var accessToken = undefined;

var express = require('express');
var app = express();

var server = app.listen(3000, function() {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port);
});

app.get('/', function (req, res) {
  res.redirect(oauth.getAuthorizeUrl({ 
    redirect_uri: 'http://localhost:3000/linked-callback',
    client_id:clientId,
    scope:'r_fullprofile',
    response_type:'code',
    state:'DCEEFWF45453sdffef424'
  }));
});

app.get(/^\/linked-callback\/?$/, function (req, res) {
  if (accessToken) {
    res.send(200);
    return;
  }
  oauth.getOAuthAccessToken(
    req.query.code, 
    { 
      grant_type:'authorization_code',
      code:req.query.code,
      redirect_uri: 'http://localhost:3000/linked-callback',
      client_id:clientId,                                           
      client_secret:secret
    }, 
    function (err, access_token, refresh_token) {
      if (err) {        
        res.status(500);
        res.end(err + "");
        return;
      }
      accessToken = access_token;
      // authenticate linkedin API
      linkedin.authenticate({
        type: "oauth",
        token: accessToken
      });
      res.send(200);    
    });
});

var testFnTmpl = function(fn, params, cb) {
  fn(params, function(err, result) {
    if (err)
      result = {"error" : err};
    //result['_NAME'] = fn.name;
    cb(null, result);
  });
}

app.get('/people', function (req, res) {
  var q = queue(1);
  var ignoreError = function (task, cb) {
    task(function(error, result) {
      return cb(null, result); // ignore error
    });
  };
  var peopleCurrent = function(cb) {
    testFnTmpl(linkedin.people.getCurrent, {"url-field-selector": ':(id,first-name,last-name,industry,connections,group-memberships,educations,date-of-birth,positions,public-profile-url)'}, cb);    
  };
  var peopleMemberByUrl = function(cb) {
    testFnTmpl(linkedin.people.getMember, {"url": 'https://www.linkedin.com/pub/julien-valery/70/624/b54', 'secure-urls': true, "url-field-selector": ':(headline,first-name,last-name)'}, cb);
  };
  var peopleMemberById = function(cb) {
    testFnTmpl(linkedin.people.getMember, {"id": '2JVl6yrion', 'secure-urls': true,"url-field-selector": ':(headline,first-name,last-name)'}, cb);
  };
  var peopleCurrentConnections = function(cb) {
    testFnTmpl(linkedin.people.getCurrentConnections, {"url-field-selector": ':(headline,first-name,last-name)'}, cb);    
  };  
  var peopleMemberConnectionsById = function(cb) {
    testFnTmpl(linkedin.people.getCurrentConnections, { "idOrUrl": '2JVl6yrion', "start": 0,"count": 5}, cb);    
  };
  var peopleMemberConnectionsByUrl = function(cb) {
    testFnTmpl(linkedin.people.getMemberConnections, { "idOrUrl": 'https://www.linkedin.com/pub/julien-valery/70/624/b54',
      "modified":"new",
      "modified-since":1267401600000,
      "start": 0,
      "count": 5}, cb);    
  };
  var search = function(cb) {
    testFnTmpl(linkedin.people.search, { "keywords": 'darul is here or not'}, cb);    
  };
  q.defer(ignoreError, peopleCurrent);
  q.defer(ignoreError, peopleMemberById);
  q.defer(ignoreError, peopleMemberByUrl);
  q.defer(ignoreError, peopleCurrentConnections);  
  q.defer(ignoreError, peopleMemberConnectionsById);
  q.defer(ignoreError, peopleMemberConnectionsByUrl);
  q.defer(ignoreError, search);  
  q.awaitAll(function(error, results) {     
    if (error)
      res.json(error);
    res.json(results);
  });
});

app.get('/groups', function (req, res) {
  var q = queue(1);
  var ignoreError = function (task, cb) {
    task(function(error, result) {
      return cb(null, result); // ignore error
    });
  };  
  var groupsCurrentMembership = function(cb) {
    testFnTmpl(linkedin.groups.getMemberships, { "membership-state": "owner",
      "start": 0,
      "count": 5,
      "url-field-selector": ":(group:(id,name,posts;count=5,site-group-url))"}, cb);     
  };
  var groupsCurrentMembershipSettings = function(cb) {      
    testFnTmpl(linkedin.groups.getMembershipDetails, { "group-id": "12435",          
      "url-field-selector": ":(show-group-logo-in-profile,email-digest-frequency,email-announcements-from-managers,allow-messages-from-members,email-for-every-new-post)"}, cb);           
  };
  var groupsOne = function(cb) {
    testFnTmpl(linkedin.groups.getDetail, { "group-id": "12435",
      "url-field-selector": ":(id,name,site-group-url,posts:(id,summary,creator))" }, cb);    
  };
  var updateOne = function(cb) {
    testFnTmpl(linkedin.groups.updateMembership, { "group-id": "12435",
      "data": {
        "membership-state": {
          "code": "member"
        }
      } 
    }, cb);    
  };
  var updateOneFull = function(cb) {
    testFnTmpl(linkedin.groups.updateMembershipFull, { "group-id": "12435",
      "data": {
        "group": {
          "id": 12345
        },        
        "show-group-logo-in-profile": true,
        "email-digest-frequency": {
          "code": "daily"
        },
        "contact-email": "darul",
        "email-announcements-from-managers": true,
        "allow-messages-from-members": true,
        "email-for-every-new-post": true,
        "membership-state": {
          "code": "member"
        },
        "email-digest-frequency": {
          "code" :"none"
        }
      } 
    }, cb);     
  };
  var deleteOne = function(cb) {
    testFnTmpl(linkedin.groups.remove, { "group-id": "12435"}, cb);    
  };
  var getPosts = function(cb) {
    testFnTmpl(linkedin.groups.getPosts, { "group-id": "12435", start:0, count:5}, cb);   
  };
  var getPost = function(cb) {
    testFnTmpl(linkedin.groups.getPost, { "post-id": "12435"}, cb);   
  };
  var getPostComments = function(cb) {
    testFnTmpl(linkedin.groups.getPostComments, { "post-id": "12435", start:0,count:5}, cb);   
  };
  var getComment = function(cb) {
    testFnTmpl(linkedin.groups.getComment, { "comment-id": "12435"}, cb);   
  };
  var getMembershipPosts = function(cb) {
    testFnTmpl(linkedin.groups.getMembershipPosts, { "group-id": "12435", start:0, count:5}, cb);    
  };
  var getSuggestionPosts = function(cb) {
    testFnTmpl(linkedin.groups.getSuggestionPosts, { "group-id": "12435"  }, cb);
  };
  var addPost = function(cb) {
    testFnTmpl(linkedin.groups.addPost, { "group-id": "12435",
      "data": {
        "title": "test",
        "summary": "summary",
        "content": {
          "submitted-url": "http",
          "submitted-image-url": "http",
          "title": "ti",
          "description": "des"
        }
      }  
    }, cb);    
  };   
  q.defer(ignoreError, groupsCurrentMembership);
  q.defer(ignoreError, groupsCurrentMembershipSettings);  
  q.defer(ignoreError, groupsOne);
  q.defer(ignoreError, updateOne);
  q.defer(ignoreError, updateOneFull);
  q.defer(ignoreError, deleteOne);
  q.defer(ignoreError, getPosts);
  q.defer(ignoreError, getPost);
  q.defer(ignoreError, getPostComments);
  q.defer(ignoreError, getComment);
  q.defer(ignoreError, getMembershipPosts);
  q.defer(ignoreError, getSuggestionPosts);
  q.defer(ignoreError, addPost); 
  q.awaitAll(function(error, results) {     
    if (error)
      res.json(error);
    res.json(results);
  });

  
});

app.get('/company', function (req, res) {
  var q = queue(1);
  var ignoreError = function (task, callback) {
    task(function(error, result) {
      return callback(null, result); // ignore error
    });
  };
  
  var companyCurrent = function(cb) {
    testFnTmpl(linkedin.company.all, {}, cb);    
  };
  var companyOneAndFields = function(cb) {
    testFnTmpl(linkedin.company.get, {'company-id': 1337, 'url-field-selector': ':(id,name)'}, cb);    
  };
  var companyOne = function(cb) {
    testFnTmpl(linkedin.company.get, {'company-id': 1337}, cb);    
  };
  var companyUniversalName = function(cb) {
    testFnTmpl(linkedin.company.getByUniversalName, {"universal-name": 'linkedin'}, cb);    
  };
  var companyEmailDomain = function(cb) {
    testFnTmpl(linkedin.company.getByEmailDomain, {"email-domain": 'linkedin.com'}, cb);    
  };
  var companyCurrentIsAdmin = function(cb) {
    testFnTmpl(linkedin.company.all, {'is-company-admin': true}, cb);    
  };
  var companyMixed = function(cb) {
    testFnTmpl(linkedin.company.all, {'url-field-selector': '::(162479,universal-name=linkedin)'}, cb);    
  };
  var companyOneUpdate = function(cb) {
    testFnTmpl(linkedin.company.getUpdate, {'company-id': 1337}, cb);    
  };
  var companyOneUpdatePagination = function(cb) {
    testFnTmpl(linkedin.company.getUpdate, {'company-id': 1337, "start":0, "count":5}, cb);    
  };
  var companyOneUpdateEventType = function(cb) {
    testFnTmpl(linkedin.company.getUpdate, {'company-id': 1337,'event-type': 'status-update'}, cb);    
  };
  var companyOneUpdateComments = function(cb) {
    testFnTmpl(linkedin.company.getUpdate, {'company-id': 1337,'company-update-key': 'UPDATE-c162479-5953413562058702849',
      'event-type': 'CMPY'}, cb);    
  };
  q.defer(ignoreError, companyCurrent);
  q.defer(ignoreError, companyOne);
  q.defer(ignoreError, companyOneAndFields);
  q.defer(ignoreError, companyOneUpdate);
  q.defer(ignoreError, companyOneUpdateEventType);
  q.defer(ignoreError, companyOneUpdatePagination);  
  q.defer(ignoreError, companyOneUpdateComments);  
  q.defer(ignoreError, companyUniversalName);
  q.defer(ignoreError, companyEmailDomain);
  q.defer(ignoreError, companyCurrentIsAdmin);
  q.defer(ignoreError, companyMixed);

  
  // q.defer(linkedin.groups.getMemberships, {});  
  q.awaitAll(function(error, results) {     
    if (error)
      res.json(error);
    res.json(results);
  });

  
});