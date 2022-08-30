const acorn = require('acorn')

const ast = acorn.parse('export const name = "rollup"', {
    locations: true, // 是否显示位置
    ranges: true, // 是否显示范围
    sourceType: 'module',
    ecmaVersion: 8
})


console.log(ast.body[0].declaration.declarations[0].id.name)