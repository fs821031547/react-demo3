import React from "react"
import { NavBar ,Icon } from "antd-mobile"
import HeadBanner from 'comp/app/headBanner'

class cmp extends React.Component {
  render() {
    return (
      <div>
        <NavBar
          mode="dark"
        >
          同天下内部测试系统
        </NavBar>
        <HeadBanner/>
      </div>
    )
  }
}
export default cmp




