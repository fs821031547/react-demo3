import React from "react"

// import { Flex, WhiteSpace } from "antd-mobile"
import Flex from "antd-mobile/lib/flex" // 加载 JS
import WhiteSpace from "antd-mobile/lib/white-space" // 加载 JS
import "antd-mobile/lib/flex/style/css"
import "antd-mobile/lib/white-space/style/css"
const PlaceHolder = ({ className = "", ...restProps }) => <div>Block</div>

const FlexExample = () => (
  <div className="flex-container">
    <div className="sub-title">Basic</div>
    <Flex>
      <Flex.Item>
        <PlaceHolder />
      </Flex.Item>
      <Flex.Item>
        <PlaceHolder />
      </Flex.Item>
    </Flex>
    <WhiteSpace size="lg" />
    <Flex>
      <Flex.Item>
        <PlaceHolder />
      </Flex.Item>
      <Flex.Item>
        <PlaceHolder />
      </Flex.Item>
      <Flex.Item>
        <PlaceHolder />
      </Flex.Item>
    </Flex>
    <WhiteSpace size="lg" />
    <Flex>
      <Flex.Item>
        <PlaceHolder />
      </Flex.Item>
      <Flex.Item>
        <PlaceHolder />
      </Flex.Item>
      <Flex.Item>
        <PlaceHolder />
      </Flex.Item>
      <Flex.Item>
        <PlaceHolder />
      </Flex.Item>
    </Flex>
    <WhiteSpace size="lg" />

    <div className="sub-title">Wrap</div>
    <Flex wrap="wrap">
      <PlaceHolder className="inline" />
      <PlaceHolder className="inline" />
      <PlaceHolder className="inline" />
      <PlaceHolder className="inline" />
      <PlaceHolder className="inline" />
      <PlaceHolder className="inline" />
      <PlaceHolder className="inline" />
    </Flex>
    <WhiteSpace size="lg" />

    <div className="sub-title">Align</div>
    <Flex justify="center">
      <PlaceHolder className="inline" />
      <PlaceHolder className="inline" />
      <PlaceHolder className="inline" />
    </Flex>
    <WhiteSpace />
    <Flex justify="end">
      <PlaceHolder className="inline" />
      <PlaceHolder className="inline" />
      <PlaceHolder className="inline" />
    </Flex>
    <WhiteSpace />
    <Flex justify="between">
      <PlaceHolder className="inline" />
      <PlaceHolder className="inline" />
      <PlaceHolder className="inline" />
    </Flex>

    <WhiteSpace />
    <Flex align="start">
      <PlaceHolder className="inline" />
      <PlaceHolder className="inline small" />
      <PlaceHolder className="inline" />
    </Flex>
    <WhiteSpace />
    <Flex align="end">
      <PlaceHolder className="inline" />
      <PlaceHolder className="inline small" />
      <PlaceHolder className="inline" />
    </Flex>
    <WhiteSpace />
    <Flex align="baseline">
      <PlaceHolder className="inline" />
      <PlaceHolder className="inline small" />
      <PlaceHolder className="inline" />
    </Flex>
  </div>
)

// ReactDOM.render(<FlexExample />, mountNode);
export default FlexExample
