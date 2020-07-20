import React from 'react';

import PropTypes from 'prop-types';

const Button = props => {
  const { name } = props;
  return (
    <button type="button" className='button'>
      { name }
    </button>
  );
};
Button.propTypes = {
  name: PropTypes.string,
};
Button.defaultProps = {
  name: 'name',
};

export default Button;
