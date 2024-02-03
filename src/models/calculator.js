function calcSum(num1, num2) {
  if (typeof num1 !== 'number' | typeof num2 !== 'number' ) return 'Error';
  return num1 + num2;
}

module.exports = {
  calcSum,
}