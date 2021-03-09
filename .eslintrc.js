module.exports = {
    extends: ['@igengmei/vue'],
    parserOptions: {
      parser: '@typescript-eslint/parser'
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'off', // 定义的变量未使用
      '@typescript-eslint/interface-name-prefix': 'off', // 接口名称不用I开头
      '@typescript-eslint/no-explicit-any': 'off', // any类型
      '@typescript-eslint/no-empty-function': 'off', // 空函数
      'vue/prop-name-casing': 'off', // vue属性名必须是驼峰
      'vue/no-v-html': 'off' // 不允许使用v-html
    }
  }
  