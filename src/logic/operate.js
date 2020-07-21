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
      if (nOne !== 0 && nTwo !== 0) {
        return (nOne.div(nTwo)).toString();
      }
      return '0';
    case '%':
      if (nOne !== 0 && nTwo !== 0) {
        return ((nOne.div(100)).times(nTwo)).toString();
      }
      return '0';
    default:
      return 'Error';
  }
};
export default Operate;
