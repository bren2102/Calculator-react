import Big from './big.mjs';

const Operate = (numberOne, numberTwo, operation) => {
  const nOne = Big(numberOne);
  const nTwo = Big(numberTwo);
  if (operation === '-') {
    return (nOne - nTwo);
  }
  switch (operation) {
    case '+':
      return (nOne.plus(nTwo)).toString();
    case '-':
      return (nOne.minus(nTwo)).toString();
    case 'x':
      return (nOne.times(nTwo)).toString();
    case '÷':
      return (nOne.div(nTwo)).toString();
    case '%':
      return ((nOne.div(100)).times(nTwo)).toString();
    default:
      return 'Error';
  }
};
export default Operate;
