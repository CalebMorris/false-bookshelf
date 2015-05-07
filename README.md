# False-Bookshelf

A set of mocked utilities for testing while isolating Bookshelf IO

# Example

```javascript
// bootstrap.js
var Bookshelf = require('bookshelf');
var False = require('false-bookshelf').FalseBookshelf;

Bookshelf.PG = False.forge();

// test-model.js

var Bookshelf = require('bookshelf');
module.export = { Model : Bookshelf.PG.Model.extend({}, {}) };


// test/test.js

var TestModel = require('./test-model').Model;
var getServer = require('./get-server');

describe('200', function() {

  var server;

  before(function() {

    server = getServer();

    TestModel.registerShim(function() {
      this.fetch.returns(Promise.resolve(this));
      this.get.withArgs('source').returns('dev');
    });

  });

  it('200', (done) => {
    var options = {
      method : 'GET',
      url : '/path/to/test',
    };

    return new Promise((resolve, reject) => {
      return server.inject(options, (response) => {
        return resolve(response);
      });
    })
    .then((response) => {
      expect(response.statusCode).to.equal(200);
      done();
    })
    .catch(done);
  });

});

```