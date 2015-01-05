"use strict";

var Fs = require("fs");
var error = require("./error");
var tunnel = require("./tunnel");
var Util = require("./util");
var Url = require("url");

function Client() {
};

function getQueryAndUrl(msg, def, format, config) {
  var url = def.url;
  if (config.pathPrefix) {
    url = config.pathPrefix + def.url;
  }
  var ret = {
    query: format == "json" ? {} : []
  };
  if (!def || !def.params) {
    ret.url = url;
    return ret;
  }

  var toSkipFields = ['url-field-selector', 'universal-name', 'url'];

  Object.keys(def.params).forEach(function(paramName) {
    paramName = paramName.replace(/^[$]+/, "");
    if (!(paramName in msg))
      return;

    if (toSkipFields.indexOf(paramName) >= 0)
      return;

    var isUrlParam = url.indexOf(":" + paramName) !== -1;
    var isId = paramName === 'id';
    var isIdOrUrl = paramName === 'idOrUrl';
    var isPartnerJobId = paramName === 'partner-job-id';
    var valFormat = isUrlParam || format != "json" ? "query" : format;
    var val;
    if (valFormat != "json" && typeof msg[paramName] == "object") {
      try {
        msg[paramName] = JSON.stringify(msg[paramName]);
        val = encodeURIComponent(msg[paramName]);        
      }
      catch (ex) {
        return Util.log("httpSend: Error while converting object to JSON: "
          + (ex.message || ex), "error");
      }
    }
    else {
      if (valFormat === 'json') {
        val = msg[paramName];        
      }
      else {
        val = encodeURIComponent(msg[paramName]);
        if (isId)
          val='id='+msg[paramName];
        if (isIdOrUrl) {
          var o = Url.parse(msg[paramName]);
          if (o.protocol)
            val='url='+encodeURIComponent(msg[paramName]);
          else
            val='id='+msg[paramName];
        }
        if (isPartnerJobId) {
          val='partnerJobId='+msg[paramName];
        }          
      }              
    }      

    if (isUrlParam) {
      url = url.replace(":" + paramName, val);
    }
    else {
      if (format == "json") {        
        ret.query[paramName] = val;
      }        
      else {
        if (isId || isIdOrUrl)
          ret.query.push(val);        
        else
          ret.query.push(paramName + "=" + val);
      }        
    }    
  });

  ret.url = url;
  return ret;
}

Client.prototype.httpSend = function(msg, block, cb) {
  var self = this;
  var method = block.method.toLowerCase();  
  var hasBody = ("head|get|delete".indexOf(method) === -1);
  var format = hasBody && this.constants.requestFormat
  ? this.constants.requestFormat
  : "query";
  var obj = getQueryAndUrl(msg, block, format, self.config);
  var query = obj.query;  

  // path  
  var path = this.path(obj, msg);

  var protocol = this.config.protocol || this.constants.protocol || "http";
  var host = this.config.host || this.constants.host;
  var port = this.config.port || this.constants.port || (protocol == "https" ? 443 : 80);

  // proxy
  this.proxy();

  // query params
  path = this.queryParams(query, path);
 
  // compute path
  var urlFieldSelector = msg['url-field-selector'];
  var bool = false;

  if (!hasBody && query.length) {
    if (urlFieldSelector) {
      path += urlFieldSelector + "?" + query.join("&");
      bool = true;
    }  
    else
      path += "?" + query.join("&");
  }
    
  if (urlFieldSelector && !bool)  
    path+= msg['url-field-selector'];    

  // headers
  var headers = {"host": host, "content-length": "0"};

  if (hasBody) {
    if (format == "json")
      query = JSON.stringify(query.data);
    else
      query = query.join("&");

    headers["content-length"] = Buffer.byteLength(query, "utf8");
    headers["content-type"] = format == "json"
    ? "application/json;"
    : "application/x-www-form-urlencoded; charset=utf-8";    
  }

  headers["x-li-format"] = "json";

  if (this.auth) {
    var basic;
    switch (this.auth.type) {
      case "token":
      if (this.auth.token) {
        headers["Authorization"] = "Bearer " + this.auth.token;        
      }
      break;
      // case "token":
      // basic = new Buffer(this.auth.username + "/token:" + this.auth.token, "ascii").toString("base64");
      // headers.authorization = "Basic " + basic;
      // break;
      default:
      break;
    }
  }

  if (!msg.headers)
    msg.headers = {};
  Object.keys(msg.headers).forEach(function(header) {
    var headerLC = header.toLowerCase();
    if (self.requestHeaders.indexOf(headerLC) == -1)
      return;
    headers[headerLC] = msg.headers[header];
  });
  if (!headers["user-agent"])
    headers["user-agent"] = "NodeJS HTTP Client";  

  var opts = { host:this.constants.host, port:port, path:path, method:method, headers:headers};

  if (this.config.proxy) {
    opts.agent = this.agent;
  }

  if (this.debug)
    console.log("REQUEST: ", opts.path);

  // request
  sendRequest.apply(this, [protocol, hasBody, query, opts, cb]);
};

Client.prototype.queryParams = function(query, path) {
  var removeIdIdx = null;
  var removeId = null;
  for (var i=0;i<query.length;i++) {
    if (query[i].indexOf('idOrUrl') >=0 || query[i].indexOf('id') >=0 || query[i].indexOf('partner-job-id') >=0) {
      removeIdIdx = i;
      removeId = query[i];
    }
  }

  if (removeIdIdx !== null && removeIdIdx >= 0)
    query.splice(removeIdIdx, 1);

  if (removeId)
    path += removeId;

  return path;
};    

Client.prototype.path = function(obj, msg) {
  var url = this.config.url ? this.config.url + obj.url : obj.url;
  
  if (msg['universal-name'])
    url+= 'universal-name='+ msg['universal-name'];
  if (msg['url'])
    url+= 'url='+ encodeURIComponent(msg['url']);
  return url;
};

Client.prototype.proxy = function() {
  var port = this.config.port || this.constants.port || (protocol == "https" ? 443 : 80);   
  var protocol = this.config.protocol || this.constants.protocol || "http";
  var proxySettings = process.env.HTTPS_PROXY || process.env.HTTP_PROXY;
  if (proxySettings !== undefined) {    
    var proxyParam = Url.parse(proxySettings);
    this.config.proxy = {
      port: proxyParam.port,
      host: proxyParam.hostname
    }
  }
  
  // proxy agent  
  if (this.config.proxy) {
    var proxyHttps = this.config.proxy.port === 443;
    var targetHttps = port === 443;
    protocol = proxyHttps === 443 ? 'https': 'http';
    
    var tunnelingAgentFn = tunnel.httpOverHttp;

    if (proxyHttps && !targetHttps)
      tunnelingAgentFn = tunnel.httpOverHttps;
    else if (!proxyHttps && targetHttps)
      tunnelingAgentFn = tunnel.httpsOverHttp;
    else if (proxyHttps && targetHttps)
      tunnelingAgentFn = tunnel.httpsOverHttps;
    this.agent = tunnelingAgentFn(this.config);
  }
};

var sendRequest = function(protocol, hasBody, query, options, cb) {
  var cbCalled = false;
  var self = this;
  
  var req = require(protocol).request(options, function(res) {
    if (self.debug) {
      console.log("STATUS: " + res.statusCode);
      console.log("HEADERS: " + JSON.stringify(res.headers));
    }
    res.setEncoding("utf8");
    var data = "";
    res.on("data", function(chunk) {
      data += chunk;
    });
    res.on("error", function(err) {
      if (!cbCalled) {
       cbCalled = true;   
       cb(err); 
     }
    });
    res.on("end", function() {
      if (cbCalled)
        return;

      cbCalled = true;
      if (res.statusCode >= 400 && res.statusCode < 600 || res.statusCode < 10) {
        cb(new error.HttpError(data, res.statusCode));
      } else {
        res.data = data;
        cb(null, res);
      }
    });
  });

  if (this.config.timeout) {
    req.setTimeout(this.config.timeout);
  }

  req.on("error", function(e) {
    if (self.debug)
      console.log("problem with request: " + e.message);
    if (!cbCalled) {
      cbCalled = true;
      cb(e.message);
    }
  });

  req.on("timeout", function() {
    if (self.debug)
      console.log("problem with request: timed out");
    if (!callbackCalled) {
      callbackCalled = true;
      callback(new error.GatewayTimeout());
    }
  });

  // write data to request body
  if (hasBody && query.length) {
    if (self.debug)
      console.log("REQUEST BODY: " + query + "\n");
    console.log(query);
    req.write(query);
  }

  req.end();
};

Client.prototype.sendError = function(err, block, msg, cb) {
  if (this.debug)
    /*Util.log(err, block, msg.user, "error");*/
  Util.log(err, "error");
  if (typeof err == "string")
    err = new error.InternalServerError(err);
  if (cb)
    cb(err);
};

Client.prototype.handler = function(msg, block, cb) {
  var self = this;
  this.httpSend(msg, block, function(err, res) {
    if (err)
      return self.sendError(err, msg, null, cb);

    var ret;
    try {
      ret = res.data && JSON.parse(res.data);
    }
    catch (ex) {
      if (cb)
        cb(new error.InternalServerError(ex.message), res);
      return;
    }

    if (!ret) {
      ret = {};
    }
    ret.meta = {};
    self.responseHeaders.forEach(function(header) {
      if (res.headers[header]) {
        ret.meta[header] = res.headers[header];
      }
    });

    if (cb)
      cb(null, ret);
  });
};

module.exports = Client;