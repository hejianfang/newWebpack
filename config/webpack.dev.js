/*
 * @Author: hejianfang
 * @Email: hejianfang@meishubao.com
 * @Date: 2021-08-26 10:46:21
 * @LastEditors: hejianfang
 * @LastEditTime: 2021-08-27 10:06:02
 * @Description:
 */
const { resolveApp } = require('./path')
const { merge } = require('webpack-merge')
const commom = require('./webpack.commom')
module.exports = merge(commom, {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  output: {
    // bundle 文件名称
    filename: '[name].bundle.js',
    // bundle 文件路径
    path: resolveApp('dist'),
    // 编译前清除目录
    clean: true
  },
  devServer: {
    static: './dist'
  }
})
