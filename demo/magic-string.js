const MagicString = require('magic-string')

const magicString = new MagicString('export const name = "rollup"')
console.log(magicString.remove(0, 7).toString())

let bundleString = new MagicString.Bundle()
bundleString.addSource({
    content: 'const name = "rollup"',
    separator: '\n\n'
})

bundleString.addSource({
    content: "console.log(name)",
    separator: '\n'
})

console.log(bundleString.toString())