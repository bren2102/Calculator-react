import React from 'react';

import PropTypes from 'prop-types';

const Button = props => {
  const { name, color, twice } = props;
  const styling = {
    background: color,
    width: twice ? '50%' : '25%',
  };
  return (
    <button type="button" className="button" style={styling}>
      { name }
    </button>
  );
};
Button.propTypes = {
  name: PropTypes.string,
  color: 'orange',
  twice: false,
};
Button.defaultProps = {
  name: 'name',
  color: '#f5913e',
  twice: false,
};

export default Button;
