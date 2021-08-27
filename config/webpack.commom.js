/*
 * @Author: hejianfang
 * @Email: hejianfang@meishubao.com
 * @Date: 2021-08-26 10:46:11
 * @LastEditors: hejianfang
 * @LastEditTime: 2021-08-27 11:09:58
 * @Description:
 */
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { appSrc } = require('./path')
module.exports = {
  entry: {
    index: './src/index.tsx'
  },
  resolve: {
    extensions: ['.tsx', '.jsx', '.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        include: [appSrc],
        type: 'asset/resource'
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        include: [appSrc],
        type: 'asset/resource'
      },
      {
        test: /\.css$/,
        include: appSrc,
        use: [
          // 将 JS 字符串生成为 style 节点
          'style-loader',
          // 将 CSS 转化成 CommonJS 模块
          'css-loader'
        ]
      },
      {
        test: /\.module\.(scss|sass)$/,
        include: appSrc,
        use: [
          // 将 JS 字符串生成为 style 节点
          'style-loader',
          // 将 CSS 转化成 CommonJS 模块
          {
            loader: 'css-loader',
            options: {
              // Enable CSS Modules features
              modules: true,
              importLoaders: 2
              // 0 => no loaders (default);
              // 1 => postcss-loader;
              // 2 => postcss-loader, sass-loader
            }
          },
          // 将 PostCSS 编译成 CSS
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  [
                    // postcss-preset-env 包含 autoprefixer
                    'postcss-preset-env'
                  ]
                ]
              }
            }
          },
          // 将 Sass 编译成 CSS
          'sass-loader'
        ]
      },
      {
        test: /\.(js|ts|jsx|tsx)$/,
        include: appSrc,
        use: [
          {
            loader: 'esbuild-loader',
            options: {
              loader: 'tsx',
              target: 'es2015'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ title: 'webpack' })
  ]
}
