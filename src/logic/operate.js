import Big from 'big.js';

const Operate = (numberOne, numberTwo, operation) => {
  console.log(numberOne);
  console.log(numberTwo);
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
      if (nTwo != 0) {
        return (nOne.div(nTwo)).toString();
      }
      return 'Error';
    case '%':
      if (nTwo != 0) {
        return (nOne.div(100).times(nTwo)).toString();
      }
      return 'Error';
    default:
      return 'Error';
  }
};
export default Operate;
