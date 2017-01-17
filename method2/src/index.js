const openingBraces = "([<{"
const closingBraces = ")]>}"

const isOpeningBrace = char => openingBraces.indexOf(char) != -1
const isClosingBrace = char => closingBraces.indexOf(char) != -1

const isCorrespondingBrace = (openingBrace, closingBrace) =>
    openingBraces.indexOf(openingBrace) == closingBraces.indexOf(closingBrace)


module.exports = {
    isOpeningBrace:isOpeningBrace,
    isClosingBrace:isClosingBrace,
    isCorrespondingBrace:isCorrespondingBrace
}