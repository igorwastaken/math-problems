import { describe, expect, test } from 'vitest';
import {
  force,
  kineticEnergy,
  potentialEnergy,
  momentum,
} from '../src/index.js';

describe('Physics Calculations', () => {
  test('force: 10 kg * 9.81 m/s² should equal 98.1 N', () => {
    expect(force(10, 9.81)).toBeCloseTo(98.1);
  });

  test('kineticEnergy: 5 kg * (10 m/s)² / 2 should equal 250 J', () => {
    expect(kineticEnergy(5, 10)).toBeCloseTo(250);
  });

  test('potentialEnergy: 5 kg * 9.81 m/s² * 20 m should equal 981 J', () => {
    expect(potentialEnergy(5, 20)).toBeCloseTo(981);
  });

  test('momentum: 5 kg * 10 m/s should equal 50 kg·m/s', () => {
    expect(momentum(5, 10)).toBe(50);
  });
});
