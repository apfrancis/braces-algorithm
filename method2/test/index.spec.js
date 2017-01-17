const test = require('tape')
const braces = require('../src/index')

test('should identify opening braces', t => {
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

test('should identify closing braces', t => {
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

test('should identify matching pairs of braces', t => {
    t.true(braces.isCorrespondingBrace('(', ')'))
    t.true(braces.isCorrespondingBrace('{', '}'))
    t.true(braces.isCorrespondingBrace('[', ']'))
    t.end()
})

test('should return false if braces dont match', t => {
    t.false(braces.isCorrespondingBrace('(', '}'))
    t.end()
})

test('should balance braces', t => {
    const vals = [
        '()',
        '{()[]}'
    ]
    vals.map(function(val){
        t.true(braces.isBalanced(val,''))
    })
    t.end()
})

test('should report if braces are imbalanced', t => {
    const vals = [
        '((',
        '{({{}'
    ]
    vals.map(function(val){
        t.false(braces.isBalanced(val,''))
    })
    t.end()
})
