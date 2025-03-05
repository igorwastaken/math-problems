import { describe, expect, it } from 'vitest';
import { toCelsius, toFahrenheit, toKelvin } from '../src/temperatures.js';

describe('Temperature Conversion Functions', () => {
  it('Converts Celsius to Fahrenheit correctly', () => {
    const result = toFahrenheit(23);
    expect(result).toBe(73.4);
  });

  it('Converts Fahrenheit to Celsius correctly', () => {
    const result = toCelsius(73).toFixed(2);
    expect(result).toBe('22.78');
  });

  it('Converts Kelvin to Celsius correctly', () => {
    const result = toCelsius(296.15, 'K');
    expect(result).toBe(23);
  });

  it('Converts Celsius to Kelvin correctly', () => {
    const result = toKelvin(23);
    expect(result).toBe(296.15);
  });

  it('Converts Fahrenheit to Kelvin correctly', () => {
    const result = toKelvin(57, 'F');
    expect(result).toBe(287);
  });

  it('Converts Celsius to Celsius correctly', () => {
    const result = toCelsius(32, 'C');
    expect(result).toBe(32);
  });
});
