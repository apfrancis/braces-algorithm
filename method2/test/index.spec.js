const test = require('tape')
const braces = require('../src/index')

test('should identify opening braces', function (t) {
  const vals = [
      '{',
      '[',
      '('
  ]
  vals.map(function(val){
      t.true(braces.isOpeningBrace(val))
  })
  t.end()
})

test('should identify closing braces', function (t) {
    const vals = [
        '}',
        ']',
        ')'
    ]
    vals.map(function(val){
        t.true(braces.isClosingBrace(val))
    })
    t.end()
})

test('should identify matching pairs of braces', function (t) {
    t.true(braces.isCorrespondingBrace('(', ')'))
    t.true(braces.isCorrespondingBrace('{', '}'))
    t.true(braces.isCorrespondingBrace('[', ']'))
    t.end()
})

test('should return false if braces dont match', function (t) {
    t.false(braces.isCorrespondingBrace('(', '}'))
    t.end()
})
