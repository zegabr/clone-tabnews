const calculator = require("../models/calculator")

test("sum 2 + 2 should return 4", () => {
  expect(calculator.sum(2,2)).toBe(4);
})
test("sum 5 + 100 should return 105", () => {
  expect(calculator.sum(5,100)).toBe(105);
})

// TDD:
test("sum 'banana' + 100 should return 'Error'", () => {
  expect(calculator.sum('banana',100)).toBe('Error');
})
