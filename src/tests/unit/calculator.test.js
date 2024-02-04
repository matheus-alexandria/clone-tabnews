const { calcSum } = require("../models/calculator");

it.each([
  [2, 3, 5],
  [50, 100, 150],
  ["banana", 5, "Error"],
])("should calculate sum of two numbers", (n1, n2, result) => {
  const sum = calcSum(n1, n2);

  expect(sum).toBe(result);
});
