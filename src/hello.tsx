/*
 * @Author: hejianfang
 * @Email: hejianfang@meishubao.com
 * @Date: 2021-08-27 11:08:28
 * @LastEditors: hejianfang
 * @LastEditTime: 2021-08-27 11:27:53
 * @Description:
 */
import React from 'react'

import styles from './assets/css/style.module.scss'

import Icon from './assets/images/1.png'

export default function Hello () {
  return (
    <div>
      hello webpack
      <p className={styles.hello}>Hello webpack</p>
      <img src={Icon} />
    </div>
  )
}
