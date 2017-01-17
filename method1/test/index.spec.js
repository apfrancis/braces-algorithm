const test = require('tape')
const Braces = require('../src/index')

test('should report balanced brackets', function (t) {
  const vals = [
    '()',
    '{}'
  ]
  vals.map(function(val){
      t.true(Braces(val))
  })
  t.end()
})

test('should report imbalanced brackets', function (t) {
  const vals = [
    '{{{}',
    '(})',
    'asdfk(}]'
  ]
  vals.map(function(val){
      t.true(Braces(val))
  })
  t.end()
})
