import React from 'react'
import { Button } from 'react-weui';
import padBox from './components/padBox'

class Comp extends React.Component{
  render() {
    return (
      <padBox>
        <Button>提交</Button>
      </padBox>
    );  
  }
}

export default Comp;
