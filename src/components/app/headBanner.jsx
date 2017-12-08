      


import React, { Component } from 'react'
import a from 'json/test'
import {me as mine  } from 'json'

export default class componentName extends Component {
  render() {
    return (
      <div>
        <div className="home-mine-block">
          <div>
            <img src="~assets/logo.png"/>
          </div>
          <div>
            <div>{mine.trueName}</div>
            <div>登录账号：{mine.userName}</div>
            <div>登录账号：{a.b}</div>
          </div>
          <i className="arrow-right"></i>
        </div>
      </div>
    )
  }
}

