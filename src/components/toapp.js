import React from 'react'

// const App = React.createClass({
//   render() {
//     return (
//       <div>
//         Hello fs
//       </div>
//     );
//   },
// });
class App extends React.Component{
  constructor() {
    super();
    this.state = {
      value: 'hello fsa',
    };
  }
  render() {
    return (
      <div>
        {this.state.value}
      </div>
    );
  }
}

export default App;
