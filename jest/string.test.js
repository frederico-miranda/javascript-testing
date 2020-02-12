import { capitalize, reverseString } from '../lib/string';

test('expects the methods \'capitalize\' and \'reverseString\' to exist', () => {
  expect(typeof capitalize).toBe('function');
  expect(typeof reverseString).toBe('function');
});

test('\'capitalize\' returns string with first letter as uppercase', () => {
  expect(capitalize('frederico')).toBe('Frederico');
  expect(capitalize('gastón')).toBe('Gastón');
});

test('\'capitalize\' does nothing when the first character has no uppercase', () => {
  expect(capitalize('')).toBe('');
  expect(capitalize(' word')).toBe(' word');
  expect(capitalize('¿qué pasa?')).toBe('¿qué pasa?');
  expect(capitalize('¡vale!')).toBe('¡vale!');
});

test('\'reverseString\' should return the reverse of the given string', () => {
  expect(reverseString('alucard')).toBe('dracula');
  expect(reverseString('live')).toBe('evil');
  expect(reverseString('pals')).toBe('slap');
  expect(reverseString('star')).toBe('rats');
  expect(reverseString('stressed')).toBe('desserts');
  expect(reverseString('madam')).toBe('madam');
  expect(reverseString('rotor')).toBe('rotor');
  expect(reverseString('noon')).toBe('noon');
  expect(reverseString('')).toBe('');
});
