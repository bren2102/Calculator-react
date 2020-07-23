import Operate from './operate';

const Calculate = (prop, buttonName) => {
  let { total, next, operation } = prop;
  const number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
  const operator = ['%', '÷', 'x', '-', '+'];
  if (total === 'Error') {
    total = null;
    next = null;
    operation = null;
  } if (number.includes(buttonName) && operation === null) {
    return {
      total: (total === null ? '' : total) + buttonName,
      next: null,
      operation: null,
    };
  } if (number.includes(buttonName) && operation) {
    return {
      total,
      next: (next === null ? '' : next) + buttonName,
      operation,
    };
  } if (operator.includes(buttonName)) {
    if (next) {
      return {
        total: Operate(total, next, operation),
        next,
        operation: buttonName,
      };
    } if (buttonName === '%') {
      return {
        total: total / 100,
        next: null,
        operation: buttonName,
      };
    }
    return {
      total,
      next: null,
      operation: buttonName,
    };
  } if (!number.includes(buttonName) || !operator.includes(buttonName)) {
    switch (buttonName) {
      case 'AC':
        return {
          total: null,
          next: null,
          operation: null,
        };
      case '+/-':
        if (next) {
          return {
            total,
            next: next * (-1),
            operation,
          };
        }
        return {
          total: total * (-1),
          next,
          operation,
        };
      case '.':
        if (total) {
          return {
            /* eslint-disable */
            total: total + '.',
            /* eslint-enable */
            next,
            operation: null,
          };
        } if (next) {
          return {
            total,
            /* eslint-disable */
            next: next + '.',
            /* eslint-enable */
            operation: null,
          };
        }
        break;
      case '=':
        if (next) {
          return {
            total: Operate(total, next, operation),
            next,
            operation: null,
          };
        } if (total && !next && !operation) {
          return {
            total,
            next: null,
            operation: null,
          };
        } if (!total && !next && !operation) {
          return {
            total: '0',
            next: null,
            operation: null,
          };
        } return {
          total,
          next,
          operation: null,
        };
      default:
        return '0';
    }
  }
  return {
    total,
    next,
    operation,
  };
};

export default Calculate;
