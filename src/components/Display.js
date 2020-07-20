import React from 'react';
import PropTypes from 'prop-types';

const Display = (props) => {
  return (
    <div>
      { props.result }
    </div>
  )
}
Display.propTypes = {
  result: PropTypes.string,
} 
Display.defaultProps = {
  result: '0',
};