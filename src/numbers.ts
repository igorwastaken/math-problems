export const PI = Math.PI;

/**
 * @param number The value of the number
 * @returns boolean
 * If it is even
 */
export function isEven(number: number): boolean {
  return number % 2 == 0;
}
/**
 * @param number The value of the number
 * @returns boolean
 * If it is odd
 */
export function isOdd(number: number): boolean {
  return !isEven(number);
}
/**
 * @param x First number
 * @param y Second number
 * @returns The difference value between X and Y
 * Difference between values
 */
export function difference(x: number, y: number): number {
  return Math.floor(x - y);
}
