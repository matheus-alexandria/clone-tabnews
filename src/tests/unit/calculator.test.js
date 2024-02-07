const { calcSum } = require("../../models/calculator");

it.each([
  [2, 3, 5],
  [50, 100, 150]
])("should calculate sum of two numbers", (n1, n2, result) => {
  const sum = calcSum(n1, n2);

  expect(sum).toBe(result);
});

it('should throw error when calculator is called with wrong params', () => {
  expect(() => calcSum(10, 'banana')).toThrow(Error);
});
