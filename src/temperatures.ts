/**
 * @description Converting temperatures.
 */

/**
 * @param temperature The temperature you want to convert to Celsius
 * @param unit The temperature unit you want to convert
 */
function toCelsius(temperature: number, unit?: TemperatureUnits): number {
  if (unit === 'C') return temperature;
  if (unit === 'K') return Math.floor(temperature - 273.15);
  return Math.floor(((temperature - 32) * 5) / 9);
}

/**
 * @param temperature The temperature you want to convert to Celsius
 * @param unit The temperature unit you want to convert
 */
function toFahrenheit(temperature: number, unit?: TemperatureUnits): number {
  if (unit === 'F') return temperature;
  if (unit === 'K') return Math.floor((temperature * 5) / 9 + 459.67);
  return Math.floor((temperature * 9) / 5 + 32);
}

/**
 * @param temperature The temperature you want to convert to Celsius
 * @param unit The temperature unit you want to convert
 */
function toKelvin(temperature: number, unit?: TemperatureUnits): number {
  if (unit === 'K') return temperature;
  if (unit === 'F') return Math.floor(((temperature + 459.67) * 5) / 9);
  return Math.floor(temperature + 273.15);
}

/**
 * The temperature units to be used in the `toCelsius`, `toFahrenheit` and `toKelvin` functions
 */
export type TemperatureUnits = 'C' | 'F' | 'K';

export { toCelsius, toFahrenheit, toKelvin };
