import { describe, it, expect } from 'vitest';
import { interpolation, regression } from '../src/index.js';

describe('Newton Interpolation', () => {
  it('should correctly interpolate for f(x) = x²', () => {
    const input = {
      function: (x: number) => x * x,
      value: 1.5,
      points: [1, 2, 3],
    };

    const result = interpolation(input);
    const expected = 1.5 * 1.5; // 2.25
    expect(result).toBeCloseTo(expected, 5);
  });

  it('should throw an error if the points array is empty', () => {
    const input = {
      function: (x: number) => x * x,
      value: 1,
      points: [] as number[],
    };

    expect(() => interpolation(input)).toThrow(
      'Points array must not be empty.',
    );
  });
});

describe('Regression', () => {
  // Data that fits exactly into the quadratic function: y = 2 + 3x + 4x²
  const data = [
    [0, 2],
    [1, 9],
    [2, 24],
  ];

  it('should calculate linear regression correctly', () => {
    const { linear } = regression(data);
    // Manual calculation:
    // sumX = 0 + 1 + 2 = 3, sumY = 2 + 9 + 24 = 35,
    // sumXY = 0*2 + 1*9 + 2*24 = 57, sumXSquared = 0 + 1 + 4 = 5, n = 3.
    // m = (3*57 - 3*35) / (3*5 - 3*3) = 66 / 6 = 11,
    // b = (35 - 11*3) / 3 = 2/3 ≈ 0.6667.
    expect(linear.m).toBeCloseTo(11, 5);
    expect(linear.b).toBeCloseTo(2 / 3, 5);
  });

  it('should calculate polynomial regression (quadratic) correctly', () => {
    const { polynomial } = regression(data);
    // Expected coefficients for y = a + bx + cx² are: a = 2, b = 3, c = 4.
    expect(polynomial.a).toBeCloseTo(2, 5);
    expect(polynomial.b).toBeCloseTo(3, 5);
    expect(polynomial.c).toBeCloseTo(4, 5);
  });

  it('should throw an error if the input data array is empty', () => {
    expect(() => regression([])).toThrow('Input array must not be empty.');
  });
});
