import ceasar from '../lib/encryption';

test('expects the method \'ceasar\' to exist', () => {
  expect(typeof ceasar).toBe('function');
});

test('\'ceasar\' should accept zero as shift', () => {
  expect(ceasar('IBM', 0)).toBe('IBM');
  expect(ceasar('Frederico', 0)).toBe('Frederico');
});

test('\'ceasar\' should accept negative shifts', () => {
  expect(ceasar('IBM', -1)).toBe('HAL');
  expect(ceasar('IBM', -27)).toBe('HAL');
  expect(ceasar('Frederico', -3)).toBe('Cobabofzl');
  expect(ceasar('Frederico', -29)).toBe('Cobabofzl');
});
  
test('\'ceasar\' should accept positive shifts', () => {
  expect(ceasar('HAL', 1)).toBe('IBM');
  expect(ceasar('HAL', 27)).toBe('IBM');
  expect(ceasar('Cobabofzl', 3)).toBe('Frederico');
  expect(ceasar('Cobabofzl', 29)).toBe('Frederico');
});
  
test('\'ceasar\' should ignore and leave in place non-latin characters', () => {
  expect(ceasar('HAL9000', 1)).toBe('IBM9000');
  expect(ceasar('Attention, please!', 1)).toBe('Buufoujpo, qmfbtf!');
  expect(ceasar('タケシくん、落ち着けよ！', 6)).toBe('タケシくん、落ち着けよ！');
  expect(ceasar('срасибо', 21)).toBe('срасибо');
});
