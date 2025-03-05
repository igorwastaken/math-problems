import { describe, expect, it } from 'vitest';
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

describe('Area Functions', () => {
  it('Rectangle area should be calculated correctly', () => {
    const result = area.rect(10, 10);
    expect(result).toBe(100);
  });

  it('Triangle area should be calculated correctly', () => {
    const result = area.triangle(5, 5);
    expect(result).toBe(12);
  });

  it('Circle area should be calculated correctly', () => {
    const result = area.circle(5);
    expect(result).toBe(78);
  });

  it('Rhombus area should be calculated correctly', () => {
    const result = area.rhombus(5, 3);
    expect(result).toBe(7);
  });

  it('Trapezoid area should be calculated correctly', () => {
    const result = area.trapezoid(5, 2, 6);
    expect(result).toBe(21);
  });
});

describe('Pythagorean Theorem Functions', () => {
  it('Calculates the cathetus correctly', () => {
    const result = cathetus(11, 10);
    expect(result).toBeCloseTo(4.58257569495584);
  });

  it('Calculates the hypotenuse correctly', () => {
    const result = hypotenuse(4.8, 3.5);
    // Rounding to the nearest integer for the test comparison
    expect(Number(result.toFixed())).toBe(6);
  });
});

describe('Basic Math Functions', () => {
  it('Checks if a number is even or odd', () => {
    expect(isEven(4)).toBe(true);
    expect(isOdd(8)).toBe(false);
  });

  it('Calculates the difference correctly', () => {
    const result = difference(3, 2);
    expect(result).toBe(1);
  });

  it('Squares a number correctly', () => {
    const result = squared(2);
    expect(result).toBe(4);
  });

  it('PI constant should match Math.PI', () => {
    expect(PI).toBe(Math.PI);
  });
});
