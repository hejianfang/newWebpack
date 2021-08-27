/*
 * @Author: hejianfang
 * @Email: hejianfang@meishubao.com
 * @Date: 2021-08-26 10:51:10
 * @LastEditors: hejianfang
 * @LastEditTime: 2021-08-27 14:22:42
 * @Description:
 */
module.exports = {
  root: true,
  env: {
    browser: true,
    commonjs: true,
    es6: true
  },
  parser: 'babel-eslint',
  extends: [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018,
    // 开启实验属性
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      // 修饰器
      experimentalDecorators: true,
      jsx: true
    },
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    'no-unused-vars': 0
  }
}
