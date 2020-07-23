import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
/* eslint-disable */
import Calculate from '../logic/calculate';
/* eslint-enable */
const App = () => (
  <div className="app">
    <Display />
    <ButtonPanel />
  </div>
);

export default App;
