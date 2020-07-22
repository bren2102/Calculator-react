import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import Calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    }
  }
  handleClick (buttonName) {
    this.setState(Calculate(this.state, buttonName));
  }
  render() {
    return (
    <div className="app">
      <Display result={this.total}/>
      <ButtonPanel clickHandler={this.handleClick}/>
    </div>
  )}
}

export default App;
