var zeros = require("../zeros.js")

require("tape")("ndarray zeros", function(t) {

  var x = zeros([64,32])
  
  t.same(x.shape, [64,32])
  t.equals(x.size, 64*32)
  t.equals(x.dtype, "float64")

  t.end()
})