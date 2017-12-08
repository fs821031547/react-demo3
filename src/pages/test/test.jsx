import React from "react"
// import { Button } from 'react-weui';

class Comp extends React.Component {
  constructor(props){
    super(props)
    this.state={
      second:0
    }
  }

  tick(){
    this.setState(prevState=>({
      second:prevState.second + 1
    }))
  }
  
  componentWillUpdate(nextProps, nextState) {
    
  }
  
  
  componentDidMount() {
    this.interval=setInterval(()=>this.tick(),1000)
  }
  
  componentWillUnmount() {
    clearInterval(this.interval)
  }

  

  render() {
    return <div>second:{this.state.second}</div>
  }
}

export default Comp
