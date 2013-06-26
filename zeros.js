"use strict"

var ndarray = require("ndarray")

module.exports = function zeros(shape) {
  var sz = 1
  for(var i=0; i<shape.length; ++i) {
    sz *= shape[i]
  }
  return ndarray(new Float64Array(sz), shape)
}