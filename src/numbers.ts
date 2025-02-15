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
 */
export function difference(x: number, y: number): number {
  return Math.floor(x - y);
}
/**
 * @param x Target value
 * @param times Times that the value can be multiplied by itself
 * @returns The squared value
 */
export function squared(x: number, times?: number): number {
  return Math.pow(x, times ?? 2);
}
/**
 * @param C Adjacent Cathetus
 * @param c Opposite Cathetus
 * @returns Value of the Hypotenuse
 */
export function hypotenuse(C: number, c: number): number {
  var h = squared(C) + squared(c);

  return Math.sqrt(h);
}
export function cathetus(H: number, C: number): number {
  if (H <= C)
    throw new Error('Cathetus cannot be greater or equal than Hypotenuse.');
  return Math.sqrt(squared(H) - squared(C));
}
