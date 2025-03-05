export const PI = Math.PI;

/**
 * @param {number} number The value of the number
 *
 * @returns {boolean} If it is even
 */
export function isEven(number: number): boolean {
  return number % 2 == 0;
}

/**
 * @param {number} number The value of the number
 *
 * @returns {boolean} If it is odd
 */
export function isOdd(number: number): boolean {
  return !isEven(number);
}

/**
 * @param {number} x First number
 * @param {number} y Second number
 *
 * @returns {number} The difference value between X and Y
 */
export function difference(x: number, y: number): number {
  return Math.max(x - y);
}

/**
 * @param {number} x Target value
 * @param {number} [times] Times that the value can be multiplied by itself
 *
 * @returns {number} The squared value
 */
export function squared(x: number, times?: number): number {
  return Math.pow(x, times ?? 2);
}

/**
 * @param {number} C Adjacent Cathetus
 * @param {number} c Opposite Cathetus
 *
 * @returns {number} Value of the Hypotenuse
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
