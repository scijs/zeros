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

It also accepts an optional dtype as specified in the [ndarray](https://github.com/scijs/ndarray) docs. For example,
```javascript
//Creates a 64x64 ndarray over a float32array filled with 0
var x = zeros([64, 64], 'float32')
```

This makes it easy to create an array with the same size and dtype as an existing array:
```javascript
var x = zeros([64, 64], 'float32')
var y = zeros( x.shape, x.dtype )
```

If you find yourself frequently creating the same array over and over though, [ndarray-scratch](https://github.com/mikolalysenko/ndarray-scratch) may be a better option.

## Install
Just use npm:

    npm install zeros
    
### `require("zeros")(shape[, dtype])`
Creates an ndarray with the given shape that is initialized to zero

* `shape` is the shape of the resulting array
* `dtype` is the data type of the array to allocate.  Must be one of:
  + `"array"`
  + `"uint8"`
  + `"uint16"`
  + `"uint32"`
  + `"int8"`
  + `"int16"`
  + `"int32"`
  + `"float"`
  + `"float32"`
  + `"double"`
  + `"float64"`
  + `"data"`
  + `"uint8_clamped"`
  + `"buffer"`

**Returns** An array which is initialized to 0

## Credits
(c) 2013 Mikola Lysenko. MIT License
