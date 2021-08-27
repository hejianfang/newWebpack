/*
 * @Author: hejianfang
 * @Email: hejianfang@meishubao.com
 * @Date: 2021-08-27 11:07:19
 * @LastEditors: hejianfang
 * @LastEditTime: 2021-08-27 11:19:17
 * @Description:
 */
import ReactDOM from 'react-dom'
import React from 'react'
import App from './App'

const a = document.createElement('div')
document.body.appendChild(a)

ReactDOM.render(<App />, document.getElementsByTagName('div')[0])

export default {}
