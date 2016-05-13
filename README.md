# range-step

Step thru a range of numbers and return them as an array.

Installation
------------

```bash
npm install range-step
```

Usage
-------

```js
var range = require('range-step')

range(1, 10) // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
range(1, 10, 2) // [ 1, 3, 5, 7, 9 ]
range(1, 15, 3) // [ 1, 4, 7, 10, 13 ]
```
