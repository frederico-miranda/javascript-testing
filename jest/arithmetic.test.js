import calculate from '../lib/arithmetic';

test('expects \'calculate\' to be an object', () => {
  expect(typeof calculate).toBe('object');
});

test('\'calculate\' should have \'add\', \'subtract\', \'divide\', \'multiply\'', () => {
  expect(typeof calculate.add).toBe('function');
  expect(typeof calculate.subtract).toBe('function');
  expect(typeof calculate.divide).toBe('function');
  expect(typeof calculate.multiply).toBe('function');
});

test('\'calculate\' method \'add\' should add two numbers', () => {
  expect(calculate.add(2, 2)).toBe(4);
  expect(calculate.add(2, 3)).toBe(5);
  expect(calculate.add(4, 6)).toBe(10);
});

test('\'calculate\' method \'subtract\' should subtract two numbers', () => {
  expect(calculate.subtract(10, 5)).toBe(5);
  expect(calculate.subtract(5, 10)).toBe(-5);
  expect(calculate.subtract(0, 0)).toBe(0);
});

test('\'calculate\' method \'divide\' should divide two numbers', () => {
  expect(calculate.divide(10, 3)).toBe(3);
  expect(calculate.divide(100, 2)).toBe(50);
  expect(calculate.divide(4, 7)).toBe(0);
});

test('\'calculate\' method \'multiply\' should multiply two numbers', () => {
  expect(calculate.multiply(12, 12)).toBe(144);
  expect(calculate.multiply(70, 7)).toBe(490);
});
