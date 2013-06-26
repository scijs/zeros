zeros
=====
A replacement for `ndarray.zeros` (which was removed in [ndarray](https://github.com/mikolalysenko/ndarray) 1.0.0)

Example
=======
```javascript
var zeros = require("zeros")

//Creates a 64x64 ndarray over a float64array filled with 0
var x = zeros([64, 64])
```

## Install
Just use npm:

    npm install zeros
    
### `require("zeros")(shape)`
Creates an ndarray with the given shape that is initialized to zero

* `shape` is the shape of the resulting array

**Returns** An array which is initialized to 0

## Credits
(c) 2013 Mikola Lysenko. MIT License
