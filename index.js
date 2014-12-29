"use strict";

var Fs = require("fs");
var error = require("./error");
var Util = require("./lib/core/util");
var util = require("util");
var Url = require("url");
var Router = require("./lib/core/router");

function Client(config) {
  this.config = config;
  this.debug = Util.isTrue(config.debug);

  this.version = config.version;
  this[this.version] = JSON.parse(Fs.readFileSync(__dirname + "/api/v" + this.version + "/routes.json", "utf8"));

  var pathPrefix = "";
  
  // Check if a prefix is passed in the config and strip any leading or trailing slashes from it.
  if (typeof config.pathPrefix == "string") {
    pathPrefix = "/" + config.pathPrefix.replace(/(^[\/]+|[\/]+$)/g, "");
    this.config.pathPrefix = pathPrefix;
  }

  Router.call(this, config);
};

util.inherits(Client, Router);

Client.prototype.authenticate = function(options) {
  if (!options) {
    this.auth = false;
    return;
  }
  if (!options.type || "oauth".indexOf(options.type) === -1)
    throw new Error("Invalid authentication type, must be 'oauth'");    
  if (options.type == "oauth") {
    if (!options.token && !(options.key && options.secret))
      throw new Error("OAuth2 authentication requires a token or key & secret to be set");
  }

  this.auth = options;
};

function getPageLinks(link) {
  if (typeof link == "object" && (link.link || link.meta.link))
    link = link.link || link.meta.link;

  var links = {};
  if (typeof link != "string")
    return links;

  // link format:
  // '<https://api.github.com/users/aseemk/followers?page=2>; rel="next", <https://api.github.com/users/aseemk/followers?page=2>; rel="last"'
  link.replace(/<([^>]*)>;\s*rel="([\w]*)\"/g, function(m, uri, type) {
    links[type] = uri;
  });
  return links;
}

Client.prototype.hasNextPage = function(link) {
  return getPageLinks(link).next;
};

Client.prototype.hasPreviousPage = function(link) {
  return getPageLinks(link).prev;
};

Client.prototype.hasLastPage = function(link) {
  return getPageLinks(link).last;
};

Client.prototype.hasFirstPage = function(link) {
  return getPageLinks(link).first;
};

function getPage(link, which, callback) {
  var url = getPageLinks(link)[which];
  if (!url)
    return callback(new error.NotFound("No " + which + " page found"));

  var parsedUrl = Url.parse(url, true);
  var block = {
    url: parsedUrl.pathname,
    method: "GET",
    params: parsedUrl.query
  };
  var self = this;
  this.httpSend(parsedUrl.query, block, function(err, res) {
    if (err)
      return self.sendError(err, null, parsedUrl.query, callback);

    var ret;
    try {
      ret = res.data && JSON.parse(res.data);
    }
    catch (ex) {
      if (callback)
        callback(new error.InternalServerError(ex.message), res);
      return;
    }

    if (!ret)
      ret = {};
    if (!ret.meta)
      ret.meta = {};
    self.responseHeaders.forEach(function(header) {
      if (res.headers[header])
        ret.meta[header] = res.headers[header];
    });

    if (callback)
      callback(null, ret);
  });
}

Client.prototype.getNextPage = function(link, callback) {
  getPage.call(this, link, "next", callback);
};

Client.prototype.getPreviousPage = function(link, callback) {
  getPage.call(this, link, "prev", callback);
};

Client.prototype.getLastPage = function(link, callback) {
  getPage.call(this, link, "last", callback);
};

Client.prototype.getFirstPage = function(link, callback) {
  getPage.call(this, link, "first", callback);
};

module.exports = Client;