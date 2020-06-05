import { add, subtract, multiply, divide } from '../context/math';

test('add', () => {
  expect(add(2, 3)).toBe(5);
  expect(add(10, 1)).toBe(11);
  expect(add(50, 20)).toBe(70);
});

test('subtract', () => {
  expect(subtract(2, 3)).toBe(-1);
  expect(subtract(10, 1)).toBe(9);
  expect(subtract(50, 20)).toBe(30);
});

test('multiply', () => {
  expect(multiply(2, 3)).toBe(6);
  expect(multiply(10, 1)).toBe(10);
  expect(multiply(50, 20)).toBe(1000);
});

test('divide', () => {
  expect(divide(10, 2)).toBe(5);
  expect(divide(10, 1)).toBe(10);
  expect(divide(10, 0)).toBe(Infinity);
});
