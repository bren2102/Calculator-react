import React from 'react';
import { PropTypes } from 'prop-types';

import Button from './Button';

const ButtonPanel = ({ clickHandler }) => {
  const handleClick = buttonName => {
    clickHandler(buttonName);
  };
  return (
    <div className="buttonPanel">
      <div>
        <Button name="AC" color="#e0e0e0" clickHandler={handleClick} />
        <Button name="+/-" color="#e0e0e0" clickHandler={handleClick} />
        <Button name="%" color="#e0e0e0" clickHandler={handleClick} />
        <Button name="÷" clickHandler={handleClick} />
      </div>
      <div>
        <Button name="7" color="#e0e0e0" clickHandler={handleClick} />
        <Button name="8" color="#e0e0e0" clickHandler={handleClick} />
        <Button name="9" color="#e0e0e0" clickHandler={handleClick} />
        <Button name="x" clickHandler={handleClick} />
      </div>
      <div>
        <Button name="4" color="#e0e0e0" clickHandler={handleClick} />
        <Button name="5" color="#e0e0e0" clickHandler={handleClick} />
        <Button name="6" color="#e0e0e0" clickHandler={handleClick} />
        <Button name="-" clickHandler={handleClick} />
      </div>
      <div>
        <Button name="1" color="#e0e0e0" clickHandler={handleClick} />
        <Button name="2" color="#e0e0e0" clickHandler={handleClick} />
        <Button name="3" color="#e0e0e0" clickHandler={handleClick} />
        <Button name="+" clickHandler={handleClick} />
      </div>
      <div>
        <Button name="0" color="#e0e0e0" wide="true" clickHandler={handleClick} />
        <Button name="." color="#e0e0e0" clickHandler={handleClick} />
        <Button name="=" clickHandler={handleClick} />
      </div>
    </div>
  );
};
ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
