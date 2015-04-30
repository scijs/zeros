var zeros = require("../zeros.js")

var test = require("tape");

test("ndarray zeros", function(t) {

  var x = zeros([64,32])

  t.same(x.shape, [64,32])
  t.equals(x.size, 64*32)
  t.equals(x.dtype, "float64")

  t.end()
});

test("ndarray native array zeros", function(t) {
  var x = zeros([64,32], 'array')
  t.true( Array.isArray(x.data) );
  t.equals( x.dtype, "array")
  t.end()
})

test("ndarray uint8 zeros", function(t) {
  var x = zeros([64,32], 'uint8')
  t.equals( x.dtype, "uint8")
  t.end()
})

test("ndarray uint16 zeros", function(t) {
  var x = zeros([64,32], 'uint16')
  t.equals( x.dtype, "uint16")
  t.end()
})

test("ndarray uint32 zeros", function(t) {
  var x = zeros([64,32], 'uint32')
  t.equals( x.dtype, "uint32")
  t.end()
})

test("ndarray int8 zeros", function(t) {
  var x = zeros([64,32], 'int8')
  t.equals( x.dtype, "int8")
  t.end()
})

test("ndarray int16 zeros", function(t) {
  var x = zeros([64,32], 'int16')
  t.equals( x.dtype, "int16")
  t.end()
})

test("ndarray int32 zeros", function(t) {
  var x = zeros([64,32], 'int32')
  t.equals( x.dtype, "int32")
  t.end()
})

test("ndarray double zeros", function(t) {
  var x = zeros([64,32], 'double')
  t.equals( x.dtype, "float64")
  t.end()
})

test("ndarray float zeros", function(t) {
  var x = zeros([64,32], 'float')
  t.equals( x.dtype, "float32")
  t.end()
})

test("ndarray uint8_clamped zeros", function(t) {
  var x = zeros([64,32], 'uint8_clamped')
  t.equals( x.dtype, "uint8_clamped")
  t.end()
})

test("ndarray array buffer zeros", function(t) {
  var x = zeros([64,32], 'buffer')
  t.equals( x.dtype, "generic")
  t.end()
})

test("ndarray data zeros", function(t) {
  var x = zeros([64,32], 'data')
  t.equals( x.dtype, "generic")
  t.end()
})
