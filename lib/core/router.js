"use strict";

var Fs = require("fs");
var error = require("./error");
var Util = require("./util");
var util = require("util");
var Url = require("url");
var Client = require("./client");

function Router(config) {
  this.config = config;
  this.debug = Util.isTrue(config.debug);

  this.version = config.version;
  this[this.version] = JSON.parse(Fs.readFileSync(__dirname + "/../../api/v" + this.version + "/routes.json", "utf8"));

  var pathPrefix = "";
  // Check if a prefix is passed in the config and strip any leading or trailing slashes from it.
  if (typeof config.pathPrefix == "string") {
    pathPrefix = "/" + config.pathPrefix.replace(/(^[\/]+|[\/]+$)/g, "");
    this.config.pathPrefix = pathPrefix;
  }

  this.setupRoutes();

  Client.call(this);
};

util.inherits(Router, Client);

Router.prototype.setupRoutes = function() {
  var self = this;
  var routes = this[this.version];
  var defines = routes.defines;
  this.constants = defines.constants;
  this.requestHeaders = defines["request-headers"].map(function(header) {
    return header.toLowerCase();
  });
  this.responseHeaders = defines["response-headers"].map(function(header) {
    return header.toLowerCase();
  });
  delete routes.defines;

  function trim(s) {
    if (typeof s != "string")
      return s;
    return s.replace(/^[\s\t\r\n]+/, "").replace(/[\s\t\r\n]+$/, "");
  }

  function parseParams(msg, paramsStruct) {
    var params = Object.keys(paramsStruct);
    var paramName, def, value, type;
    for (var i = 0, l = params.length; i < l; ++i) {
      paramName = params[i];
      if (paramName.charAt(0) == "$") {
        paramName = paramName.substr(1);
        if (!defines.params[paramName]) {
          throw new error.BadRequest("Invalid variable parameter name substitution; param '" +
            paramName + "' not found in defines block", "fatal");
        }
        else
          def = defines.params[paramName];
      }
      else
        def = paramsStruct[paramName];

      value = trim(msg[paramName]);
      if (typeof value != "boolean" && !value) {
        // we don't need to validation for undefined parameter values
        // that are not required.
        if (!def.required)
          continue;
        throw new error.BadRequest("Empty value for parameter '" +
          paramName + "': " + value);
      }

      // validate the value and type of parameter:
      if (def.validation) {
        if (!new RegExp(def.validation).test(value)) {
          throw new error.BadRequest("Invalid value for parameter '" +
            paramName + "': " + value);
        }
      }

      if (def.type) {
        type = def.type.toLowerCase();
        if (type == "number") {
          value = parseInt(value, 10);
          if (isNaN(value)) {
            throw new error.BadRequest("Invalid value for parameter '" +
              paramName + "': " + msg[paramName] + " is NaN");
          }
        }
        else if (type == "float") {
          value = parseFloat(value);
          if (isNaN(value)) {
            throw new error.BadRequest("Invalid value for parameter '" +
              paramName + "': " + msg[paramName] + " is NaN");
          }
        }
        else if (type == "json") {
          if (typeof value == "string") {
            try {
              value = JSON.parse(value);
            }
            catch(ex) {
              throw new error.BadRequest("JSON parse error of value for parameter '" +
                paramName + "': " + value);
            }
          }
        }
        else if (type == "date") {
          value = new Date(value);
        }
      }
      msg[paramName] = value;
    }
  }

  function prepareApi(struct, baseType) {
    if (!baseType)
      baseType = "";
    Object.keys(struct).forEach(function(routePart) {
      var block = struct[routePart];
      if (!block)
        return;
      var messageType = baseType + "/" + routePart;
      if (block.url && block.params) {
        // we ended up at an API definition part!
        var endPoint = messageType.replace(/^[\/]+/g, "");
        var parts = messageType.split("/");
        var section = Util.toCamelCase(parts[1].toLowerCase());
        parts.splice(0, 2);
        var funcName = Util.toCamelCase(parts.join("-"));

        if (!self[section]) {
          self[section] = {};
            // add a utility function 'getFooApi()', which returns the
            // section to which functions are attached.
            self[Util.toCamelCase("get-" + section + "-api")] = function() {
              return self[section];
            };
          }

          self[section][funcName] = function(msg, callback) {
            try {
              parseParams(msg, block.params);
            }
            catch (ex) {
              // when the message was sent to the client, we can
              // reply with the error directly.
              self.sendError(ex, block, msg, callback);
              if (self.debug)
                Util.log(ex.message, "fatal");
              // on error, there's no need to continue.
              return;
            }
          self.handler(msg, block, callback);
        };
      }
      else {
        // recurse into this block next:
        prepareApi(block, messageType);
      }
    });
  }

  prepareApi(routes);
};

module.exports = Router;