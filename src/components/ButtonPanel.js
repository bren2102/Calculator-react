import React from 'react';
import { PropTypes } from 'prop-types';

import Button from './Button';

const ButtonPanel = ({ clickHandler }) => (
  <div className="buttonPanel">
    <div>
      <Button name="AC" color="#e0e0e0" clickHandler={clickHandler} />
      <Button name="+/-" color="#e0e0e0" clickHandler={clickHandler} />
      <Button name="%" color="#e0e0e0" clickHandler={clickHandler} />
      <Button name="÷" clickHandler={clickHandler} />
    </div>
    <div>
      <Button name="7" color="#e0e0e0" clickHandler={clickHandler} />
      <Button name="8" color="#e0e0e0" clickHandler={clickHandler} />
      <Button name="9" color="#e0e0e0" clickHandler={clickHandler} />
      <Button name="x" clickHandler={clickHandler} />
    </div>
    <div>
      <Button name="4" color="#e0e0e0" clickHandler={clickHandler} />
      <Button name="5" color="#e0e0e0" clickHandler={clickHandler} />
      <Button name="6" color="#e0e0e0" clickHandler={clickHandler} />
      <Button name="-" clickHandler={clickHandler} />
    </div>
    <div>
      <Button name="1" color="#e0e0e0" clickHandler={clickHandler} />
      <Button name="2" color="#e0e0e0" clickHandler={clickHandler} />
      <Button name="3" color="#e0e0e0" clickHandler={clickHandler} />
      <Button name="+" clickHandler={clickHandler} />
    </div>
    <div>
      <Button name="0" color="#e0e0e0" wide="true" clickHandler={clickHandler} />
      <Button name="." color="#e0e0e0" clickHandler={clickHandler} />
      <Button name="=" clickHandler={clickHandler} />
    </div>
  </div>
);
ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
