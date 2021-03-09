module.exports = {
    plugins: [
        'html' // 使用eslint-plugin-html
    ],
    extends: ['plugin:vue/recommended', 'eslint:recommended'],
    parserOptions: {
        parser: "babel-eslint"
    },
    parserOptions: {
        sourceType: 'module' // 按照模块的方式解析
    },
    env: {
      browser: true, // 开发环境配置表示可以使用浏览器的方法
      node: true, //
      es6: true
    },
    rules: {
      // 自定义的规则
        "linebreak-style": [0 ,"error", "windows"],
        "indent": ['error', 4], // error类型，缩进4个空格
        'space-before-function-paren': 0, // 在函数左括号的前面是否有空格
        'eol-last': 0, // 不检测新文件末尾是否有空行
        'semi': ['error', 'always'], // 必须在语句后面加分号
        "quotes": ["error", "double"],// 字符串没有使用单引号
        "no-console": ["error",{allow:["log","warn"]}],// 允许使用console.log()
        "arrow-parens": 0,
        "no-new":0 //允许使用 new 关键字
    }
}