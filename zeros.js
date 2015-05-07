"use strict";

var ndarray = require("ndarray");

function dtypeToType(dtype) {
  switch(dtype) {
    case 'uint8':
      return Uint8Array;
      break;
    case 'uint16':
      return Uint16Array;
      break;
    case 'uint32':
      return Uint32Array;
      break;
    case 'int8':
      return Int8Array;
      break;
    case 'int16':
      return Int16Array;
      break;
    case 'int32':
      return Int32Array;
      break;
    case 'float':
    case 'float32':
      return Float32Array;
      break;
    case 'double':
    case 'float64':
      return Float64Array;
      break;
    case 'uint8_clamped':
      return Uint8ClampedArray;
      break;
    case 'generic':
    case 'buffer':
    case 'data':
    case 'dataview':
      return ArrayBuffer;
    	break;
    case 'array':
      return Array;
      break;
  }
}

module.exports = function zeros(shape, dtype) {
  dtype = dtype || 'float64';
  var sz = 1;
  for(var i = 0; i < shape.length; ++i) {
    sz *= shape[i];
  }
  return ndarray(new (dtypeToType(dtype))(sz), shape);
}
