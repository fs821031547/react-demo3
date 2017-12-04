import React from 'react'

class Comp extends React.Component{
  render() {
    return (
      <h3 class="my-title">精彩{ this.props.title }</h3>
    );
  }
}

export default Comp;
