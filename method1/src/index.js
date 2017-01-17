function Braces (input) {
   const getBracePosition = (char, str) => str.indexOf(char)
   const isValidBrace = char => '(){}[]'.indexOf(char) !== -1
   let balanced = true

   const braceMap = {
     '(':-1,
     ')':-1,
     '{':-1,
     '}':-1,
     '[':-1,
     ']':-1
   }

  const bracePresent = (char) => braceMap[char] !== -1
  const bracesBalanced = (opening, closing) => braceMap[opening] < braceMap[closing]
  const bracesPresent = (opening, closing) => bracePresent(opening) || bracePresent(closing)
  const roundBracketsBalanced = () => bracesBalanced('(', ')')
  const squareBracketsBalanced = () => braceMap['['] < braceMap[']']
  const squigglyBracketsBalanced = () => braceMap['{'] < braceMap['}']

  input.split('').forEach(char => {
    if (isValidBrace(char)) {
      braceMap[char] = getBracePosition(char, input)
    }
  })

  if (bracesPresent('(', ')')) {
    balanced = roundBracketsBalanced()
  }
  if (bracesPresent('[', ']')) {
    balanced = squareBracketsBalanced()
  }
  if (bracesPresent('{', '}')) {
    balanced = squigglyBracketsBalanced()
  }

  return balanced
}

module.exports = Braces
