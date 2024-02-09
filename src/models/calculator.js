function calcSum(num1, num2) {
  if (typeof num1 !== 'number' | typeof num2 !== 'number' ) {
    return {
      status: 'Error',
      message: 'Not possible to run sum with given parameters'
    }
  };
  return num1 + num2;
}

module.exports = {
  calcSum,
}
