"use strict";

var Fs = require("fs");
var error = require("./error");
var Util = require("./util");
var util = require("util");
var Url = require("url");
var Router = require("./router");

/** section: linkedin
 * class Linkedin
 *
 *  The MIT License (MIT) Copyright (c) 2014 Julien Valéry
 *
 *  Author: Julien Valéry <darul75@gmail.com>
 *
 *  Deeply inspired by node-github project.
 *
 *  [[Linkedin]] load version 1 of the [[linkedin]] client API, with the
 *  requirement that a valid routes.json definition file is present in the
 *  `api/[VERSION]` directory and that the routes found in this file are
 *  implemented as well.
 *
 *  Upon instantiation of the [[Linkedin]] class, the routes.json file is loaded
 *  from the API version specified in the configuration and, parsed and from it
 *  the routes for HTTP requests are extracted. For each HTTP endpoint to the
 *  HTTP server, a method is generated which accepts a Javascript Object
 *  with parameters and an optional callback to be invoked when the API request
 *  returns from the server or when the parameters could not be validated.
 *
 *  When an HTTP endpoint is processed and a method is generated as described
 *  above, [[Linkedin]] also sets up parameter validation with the rules as
 *  defined in the routes.json. A full example that illustrates how this works
 *  is shown below:
 *
 *  ##### Example
 *
 *  First, we look at a listing of a sample routes.json routes definition file:
 *
 *      {
 *          "defines": {
 *              "constants": {
 *                  "name": "Github",
 *                  "description": "A Node.JS module, which provides an object oriented wrapper for the LinkedIn API.",
 *                  "protocol": "https",
 *                  "host": "api.linkedin.com",
 *                  "port": 443,
 *                  "dateFormat": "YYYY-MM-DDTHH:MM:SSZ",
 *                  "requestFormat": "json"
 *              },
 *              "response-headers": [
 *                  "X-RateLimit-Limit",
 *                  "X-RateLimit-Remaining",
 *                  "Link"
 *              ],
 *              "params": {
 *                  "url-field-selector": {
 *                      "type": "String",
 *                      "required": true,
 *                      "validation": "",
 *                      "invalidmsg": "",
 *                      "description": "Explicitly request the data you want, more details here : https://developer.linkedin.com/documents/understanding-field-selectors"
 *                  },
 *                  "id": {
 *                      "type": "String",
 *                      "required": true,
 *                      "validation": "",
 *                      "invalidmsg": "",
 *                      "description": "A unique identifier token for this member."
 *                  },
 *              }
 *          },
 *
 *          "people": {
 *              "get-current": {
 *                  "url": "/people/~",
 *                  "method": "GET",
 *                  "params": {
 *                      "$url-field-selector": null,
 *                      "$secure-urls": null
 *                  }
 *              },
 *
 *              "get-member": {
 *                  "url": "/people/",
 *                  "method": "GET",
 *                  "params": {
 *                      "$id": null,
 *                      "$url": null,
 *                      "$url-field-selector": null,
 *                      "$secure-urls": null,
 *                  }
 *              }
 *          }
 *       }
 *
 *  You probably noticed that the definition is quite verbose and the decision
 *  for its design was made to be verbose whilst still allowing for basic variable
 *  definitions and substitions for request parameters.
 *
 *  There are two sections; 'defines' and 'people' in this example.
 *
 *  The `defines` section contains a list of `constants` that will be used by the
 *  [[Linkedin]] to make requests to the right URL that hosts the API.
 *  The `people` section defines the endpoints for calls to the API server, for
 *  people specifically in this example, but the other API sections are defined in
 *  the exact same way.
 *  These definitions are parsed and methods are created that the client can call
 *  to make an HTTP request to the server.
 *  there is one endpoint defined: .
 *  In this example, the endpoint `people/get-current` may be invoked with
 *
 *      var Linkedin = require('node-linked-in');
 *
 *      var cfg = {version: "1", pathPrefix:"v1"};
 *      var linkedin = new Linkedin(cfg);
 *      // oauth2 authentication then:      
 *      linkedin.authenticate({
 *        type: "oauth",
 *        token: accessToken
 *      });
 *
 *      linkedin.getCurrent({}, function(err, ret) {
 *          // do something with the result here.
 *      });
 *
 *      // or to fetch a specfic member:
 *      linkedin.getMember({
 *          "id": "abcde"
 *      }, function(err, ret) {
 *          // do something with the result here.
 *      });
 *
 *  All the parameters as specified in the Object that is passed to the function
 *  as first argument, will be validated according to the rules in the `params`
 *  block of the route definition.
 *  Thus, in the case of the `id` parameter, according to the definition in
 *  the `params` block, it's a variable that first needs to be looked up in the
 *  `params` block of the `defines` section (at the top of the JSON file). Params
 *  that start with a `$` sign will be substituted with the param with the same
 *  name from the `defines/params` section.
 *  There we see that it is a required parameter (needs to hold a value). In other
 *  words, if the validation requirements are not met, an HTTP error is passed as
 *  first argument of the callback.
 *
 **/
function Linkedin(config) {
  config = config || {debug:false};
  this.config = config;
  this.debug = Util.isTrue(config.debug);

  this.version = config.version = config.version || "1";
  config.pathPrefix = config.pathPrefix || "v1";  

  console.log(this.version);

  this[this.version] = JSON.parse(Fs.readFileSync(__dirname + "/../../api/v" + this.version + "/routes.json", "utf8"));

  var pathPrefix = "";
  
  // Check if a prefix is passed in the config and strip any leading or trailing slashes from it.
  if (typeof config.pathPrefix == "string") {
    pathPrefix = "/" + config.pathPrefix.replace(/(^[\/]+|[\/]+$)/g, "");
    this.config.pathPrefix = pathPrefix;
  }

  Router.call(this, config);
};

util.inherits(Linkedin, Router);

 /**
 *  Linkedin#authenticate(options)
 *      - options (Object): Object containing the authentication type and credentials 
 *          - token (String): OAuth2 token
 *
 *  Set an authentication method to have access to protected resources.
 *
 *  ##### Example
 *
 *      linkedin.authenticate({
 *          token: "e5a4a27487c26e571892846366de023349321a73"
 *      });
 *
 **/
Linkedin.prototype.authenticate = function(options) {
  if (!options) {
    this.auth = false;
    return;
  }
  options.type = options.type || 'token';
  if ("token".indexOf(options.type) === -1)
    throw new Error("Invalid authentication type, must be 'token'");
  if (options.type == "token" && !options.token)
    throw new Error("Token authentication requires a token to be set");

  this.auth = options;
};

module.exports = Linkedin;