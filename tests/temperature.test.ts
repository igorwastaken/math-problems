import { test, describe, expect } from 'vitest';
import { toCelsius, toFahrenheit, toKelvin } from '../src/temperatures.js';

describe('Temperatures test', () => {
  test('Celsius to Fahrenheit', () => {
    const temperature = toFahrenheit(23);

    expect(temperature).toBe(73);
  });
  test('Fahrenheit to Celsius', () => {
    const temperature = toCelsius(73);

    expect(temperature).toBe(22);
  });
  test('Kelvin to Celsius', () => {
    const temperature = toCelsius(296.15, 'K');

    expect(temperature).toBe(23);
  });
  test('Celsius to Kelvin', () => {
    const temperature = toKelvin(23);

    expect(temperature).toBe(296);
  });
  test('Fahrenheit to Kelvin', () => {
    const temperature = toKelvin(57, 'F');

    expect(temperature).toBe(287);
  });
  test('Celsius to Celsius', () => {
    const temperature = toCelsius(32, 'C');

    expect(temperature).toBe(32);
  });
});
