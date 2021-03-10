/*
 * @Author: yangying01
 * @description: 
 * @Date: 2020-12-08 20:50:12
 * @LastEditors: yangying01
 * @LastEditTime: 2020-12-08 21:01:22
 */
var path = require('path')

module.exports = {
  // 去掉eslint
  lintOnSave: false,
  pages:{
    index: {
      entry: './examples/main.js',
      template: './public/index.html',
      filename: 'index.html'
    }
  },
  chainWebpack: config => {
    config.module
      .rule('js')
      .include.add(path.resolve(__dirname, 'packages')).end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => {
        return options
      })
  }
}