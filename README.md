# False-Bookshelf

A set of mocked utilities for testing while isolating Bookshelf IO

```javascript
var Bookshelf = require('bookshelf');
var False = require('false-bookshelf').FalseBookshelf;

Bookshelf.PG = False.forge();

```