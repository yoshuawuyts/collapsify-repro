const test = require('tape')
const collapsifyRepro = require('./')

test('should assert input types', function (t) {
  t.plan(1)
  t.throws(collapsifyRepro)
})
