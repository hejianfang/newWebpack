/*
 * @Author: hejianfang
 * @Email: hejianfang@meishubao.com
 * @Date: 2021-08-26 10:46:29
 * @LastEditors: hejianfang
 * @LastEditTime: 2021-08-26 11:02:54
 * @Description:
 */
const { resolveApp } = require('./path')
const { merge } = require('webpack-merge')
const commom = require('./webpack.commom')
module.exports = merge(commom, {
  mode: 'production',
  // 输出
  output: {
    // bundle 文件名称 【只有这里和开发环境不一样】
    filename: '[name].[contenthash].bundle.js',
    // bundle 文件路径
    path: resolveApp('dist'),
    // 编译前清除目录
    clean: true
  }
})
