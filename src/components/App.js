import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import Calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      total: null,
      next: null,
      operation: null,
    }
  }
  handleClick (buttonName) {
    const calc = Calculate(this.state, buttonName);
    this.setState(calc);
  }
  render() {
    const value = this.state.operation? this.state.next:this.state.total;
    return (
    <div className="app">
      <Display result={value}/>
      <ButtonPanel clickHandler={this.handleClick}/>
    </div>
  )}
}

export default App;
