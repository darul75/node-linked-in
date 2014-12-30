node-linked-in [![NPM version](https://badge.fury.io/js/node-linked-in.png)](http://badge.fury.io/js/node-linked-in)  [![Total views](https://sourcegraph.com/api/repos/github.com/darul75/node-linked-in/counters/views.png)](https://sourcegraph.com/github.com/darul75/node-linked-in)
=============

A Node.JS module, which provides an object oriented wrapper for the LinkedIn API.

## Why ?

Because ecchymose in the nose. I needed something but on server side.

## API

http://darul75.github.io/node-linked-in/

## Install

~~~
npm install node-linked-in
~~~

## Usage

```javascript
var Linkedin = require('node-linked-in');

var cfg = {version: "1", pathPrefix:"v1"};

/* proxy example
var config = {
  version: "1",
  pathPrefix:"v1",
  proxy: {
    host: 127.0.0.1,
    port: 8083
  }
}*/

var linkedin = new Linkedin(cfg);

// Oauth2 auth, yoy might use https://github.com/ciaranj/node-oauth

// store info
linkedin.authenticate({
  type: "oauth",
  token: accessToken
});

// now you can play with API
linkedin.people.getCurrent({
  "url-field-selector": ':(id,first-name,last-name,industry)'}, 
  function(err, res) {
  // current example retrieve current user profile info with specified fields
  });

// PUT or POST methods use 'data' hash object
// see here for details as first json level attribute is omitted
// https://developer.linkedin.com/documents/api-requests-json

linkedin.groups.addPost({ 
  "group-id": "12435",
  "data": {
    "title": "test",
    "summary": "summary",
    "content": {
      "submitted-url": "http",
      "submitted-image-url": "http",
      "title": "ti",
      "description": "des"
    }
  },
  function(err, res) {

  });

```    
    
## Options    

- **version** : 1 only. TODO: set it by default
- **pathPrefix** : v1 only. TODO: set it by default
- **proxy**: hash object

```json
proxy = {
  "port": 8083,
  "host": "127.0.0.1"
}
```

Whether process.env.HTTPS_PROXY or process.env.HTTP_PROXY are set, providing hash proxy is not needed.

## Metrics

[![NPM](https://nodei.co/npm/node-linked-in.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/node-linked-in/)

## License

The MIT License (MIT)

Copyright (c) 2014 Julien Valéry

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
