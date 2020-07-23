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
    };
  }

  handleClick(buttonName) {
    const calc = Calculate(this.state, buttonName);
    this.setState(calc);
  }

  render() {
    /* eslint-disable */
    let total1 = this.state.total == null ? '' : this.state.total;
    let next2 = this.state.next == null ? '' : this.state.next;
    let op = this.state.operation == null ? '' : this.state.operation;
    const value = total1 + ' ' + op + ' ' + next2;
    /* eslint-enable */
    return (
      <div className="app">
        <Display result={value} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;
