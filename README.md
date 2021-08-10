# jsontrim

A node module for transforming and performing operations on JSON.

## Installation

```javascript
npm install jsontrim --save
```

### Get Started

```javascript
var jsontrim = require("jsontrim").jsontrim;
// or
var { jsontrim } = require("jsontrim");
```

example 1:

```javascript
var data = {
  fname: "first name",
  lname: "last name",
  address: "india",
};

var schema = {
  fname: "string",
  lname: "string",
  fullname: "string",
};
async function example1() {
  var result = await trimjson(data, schema);
  //      result :
  //      {
  //            fname: 'first name',
  //            lname : "last name",
  //        }
}
example1();
```

example 2:

```javascript
var data = {
  fname: "first name",
  lname: "last name",
  address: {
    housenumber: 123,
    area: "area",
    state: "state",
    country: "country",
    pin: 4343,
  },
};

var schema = {
  fname: "string",
  lname: "string",
  address: {
    housenumber: "number",
    state: "string",
    country: "string",
  },
};
async function example2() {
  var result = await trimjson(data, schema);
  //      result :
  // {
  //     fname: "first name",
  //     lname: "last name",
  //     address: {
  //       housenumber: 123,
  //       state: "state",
  //       country: "country",
  //     },
  //   }
}
example2();
```

## Credits

- [Anil Kumar Dyavanapalli](https://github.com/dakumar1729)

## License

(The MIT License)

Copyright (c) 2014 Anil Kumar Dyavanapalli

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
