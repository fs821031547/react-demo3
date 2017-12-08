import React from 'react'

class markerDown extends React.Component{
  constructor(props){
    super(props)
    this.handleChange=this.handleChange.bind(this)
    this.state = { value : 'fdsafsadfa'}
  }
  handleChange(e){
    this.setState({value:e.target.value})
  }
  render() {
    return (
      <div>
        <h3>Input</h3>
        <textarea onChange={this.handleChange} defaultValue={this.state.value}></textarea>
        <h3>Output</h3>
        <div className="content">
          {this.state.value}
        </div>
      </div>
    )
  }
}

export default markerDown