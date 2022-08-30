const MagicString = require('magic-string')

const magicString = new MagicString('export const name = "rollup"')
console.log(magicString.remove(0, 7).toString())