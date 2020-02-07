import analyze from '../lib/statistics';

test('expects the method \'analyze\' to exist', () => {
  expect(typeof analyze).toBe('function');
});

test('\'analyze\' should return null when given an empty array', () => {
  expect(analyze([])).toBe(null);
});

test('\'analyze\' returns an object with \'average\', \'max\', \'min\', \'length\'', () => {
  const analysis = analyze([1, 8, 3, 4, 2, 6]);
  expect(typeof analysis).toBe('object');

  expect(typeof analysis.average).toBe('number');
  expect(typeof analysis.max).toBe('number');
  expect(typeof analysis.min).toBe('number');
  expect(typeof analysis.length).toBe('number');

  expect(analysis.average).toBeCloseTo(4);
  expect(analysis.max).toBe(8);
  expect(analysis.min).toBe(1);
  expect(analysis.length).toBe(6);
});
