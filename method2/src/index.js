const openingBraces = "([<{"
const closingBraces = ")]>}"

const isOpeningBrace = char => openingBraces.indexOf(char) != -1
const isClosingBrace = char => closingBraces.indexOf(char) != -1

const isCorrespondingBrace = (openingBrace, closingBrace) =>
    openingBraces.indexOf(openingBrace) == closingBraces.indexOf(closingBrace)

const isBalanced = (input, stack) => {
    if (input === '') {
        return (stack === '')
    } else if (isOpeningBrace(input.charAt(0))) {
        return isBalanced(input.substr(1), input.charAt(0) + stack)
    } else if (isClosingBrace(input.charAt(0))) {
        return !(stack === '')
            && isCorrespondingBrace(stack.charAt(0), input.charAt(0))
            && isBalanced(input.substr(1), stack.substr(1))
    } else {
        isBalanced(input.substr(1),stack)
    }
}

module.exports = {
    isOpeningBrace,
    isClosingBrace,
    isCorrespondingBrace,
    isBalanced
}