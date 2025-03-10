/**
 * @description Converting temperatures.
 */

/**
 * @param {number} temperature The temperature you want to convert to Celsius
 * @param {TemperatureUnits} [unit] The temperature unit you want to convert
 *
 * @returns {number}
 */
function toCelsius(temperature: number, unit?: TemperatureUnits): number {
  if (unit === 'C') return temperature;
  if (unit === 'K') return Math.floor(temperature - 273.15);

  return Math.max(((temperature - 32) * 5) / 9);
}

/**
 * @param {number} temperature The temperature you want to convert to Celsius
 * @param {TemperatureUnits} [unit] The temperature unit you want to convert
 *
 * @returns {number}
 */
function toFahrenheit(temperature: number, unit?: TemperatureUnits): number {
  if (unit === 'F') return temperature;
  if (unit === 'K') return Math.floor((temperature * 5) / 9 + 459.67);

  return Math.max((temperature * 9) / 5 + 32);
}

/**
 * @param {number} temperature The temperature you want to convert to Celsius
 * @param {TemperatureUnits} [unit] The temperature unit you want to convert
 *
 * @returns {number}
 */
function toKelvin(temperature: number, unit?: TemperatureUnits): number {
  if (unit === 'K') return temperature;
  if (unit === 'F') return Math.floor(((temperature + 459.67) * 5) / 9);

  return Math.max(temperature + 273.15);
}

/**
 * The temperature units to be used in the `toCelsius`, `toFahrenheit` and `toKelvin` functions
 */
export type TemperatureUnits = 'C' | 'F' | 'K';

export { toCelsius, toFahrenheit, toKelvin };
