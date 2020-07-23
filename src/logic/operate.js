import Big from 'big.js';

const Operate = (numberOne, numberTwo, operation) => {
  const nOne = Big(numberOne);
  const nTwo = Big(numberTwo);
  switch (operation) {
    case '+':
      return (nOne.plus(nTwo)).toString();
    case '-':
      return (nOne.minus(nTwo)).toString();
    case 'x':
      return (nOne.times(nTwo)).toString();
    case '÷':
      /* eslint-disable */
      if (nTwo == '0') {
        return 'Undefined';
      }
      return (nOne.div(nTwo)).toString();
    case '%':
      if (nTwo == '0') {
        /* eslint-enable */
        return 'Undefined';
      }
      return (nOne.mod(nTwo)).toString();
    default:
      return 'Undefined';
  }
};
export default Operate;
