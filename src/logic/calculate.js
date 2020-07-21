import Operate from './operate';

const Calculate = (prop, buttonName) => {
  const { total, next, operation } = prop;
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
      if (next) {
        return {
          total: `${total}.`,
          next: `${next}.`,
          operation: null,
        };
      } if (total && !next) {
        return {
          total: `${total}.`,
          next: null,
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
      }
      break;
    case '%':
      if (next) {
        return {
          total: Operate(total, next, operation),
          next,
          operation,
        };
      }
      return {
        total: total / 100,
        next: null,
        operation: null,
      };
    case '÷':
      if (next) {
        return {
          total: Operate(total, next, operation),
          next,
          operation,
        };
      }
      return {
        total,
        next: null,
        operation: null,
      };
    case 'x':
      if (next) {
        return {
          total: Operate(total, next, operation),
          next,
          operation,
        };
      }
      return {
        total,
        next: null,
        operation: null,
      };
    case '-':
      if (next) {
        return {
          total: Operate(total, next, operation),
          next,
          operation,
        };
      }
      return {
        total,
        next: null,
        operation: null,
      };
    case '+':
      if (next) {
        return {
          total: Operate(total, next, operation),
          next,
          operation,
        };
      }
      return {
        total,
        next: null,
        operation: null,
      };
    default:
      return '0';
  }
  return {
    total,
    next,
    operation,
  };
};

export default Calculate;
