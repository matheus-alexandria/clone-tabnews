const { calcSum } = require('../models/calculator');

test("calculate sum of two numbers", () => {
  const sum = calcSum(2, 2);

  expect(sum).toBe(4);
});
