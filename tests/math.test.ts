import { describe, expect, test } from 'vitest';
import { area } from '../src/area.js';
import {
  PI,
  cathetus,
  difference,
  hypotenuse,
  isEven,
  isOdd,
  squared,
} from '../src/numbers.js';

describe('Testing area functions', () => {
  test('Rectangle', () => {
    const rect = area.rect(10, 10);

    expect(rect).toBe(100);
  });
  test('Triangle', () => {
    const triangle = area.triangle(5, 5);
    expect(triangle).toBe(12);
  });
  test('Circle', () => {
    const circle = area.circle(5);
    expect(circle).toBe(78);
  });
  test('Rhombus', () => {
    const rhombus = area.rhombus(5, 3);
    expect(rhombus).toBe(7);
  });
  test('Trapezoid', () => {
    const trapezoid = area.trapezoid(5, 2, 6);
    expect(trapezoid).toBe(21);
  });
});
describe('pythagorean theorem', () => {
  test('Cathetus', () => {
    expect(cathetus(11, 10)).toBe(4.58257569495584);
  });
  test('Hypotenuse', () => {
    expect(Number(hypotenuse(4.8, 3.5).toFixed())).toBe(6);
  });
});
describe('Basic Math', () => {
  test('Is even or Is odd', () => {
    expect(isEven(4)).toBe(true);
    expect(isOdd(8)).toBe(false);
  });
  test('Difference', () => {
    expect(difference(3, 2)).toBe(1);
  });
  test('Squared', () => {
    expect(squared(2)).toBe(4);
  });
  test('PI', () => {
    expect(PI).toBe(Math.PI);
  });
});
