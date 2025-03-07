import { PI, squared } from './numbers.js';

/**
 * @description Calculate the area of geometric shapes
 */
export const area = {
  /**
   * @param {number} base Size of the base of the rectangle
   * @param {number} height The height of the rectangle
   *
   * @returns {number} base * height
   */
  rect: (base: number, height: number): number => {
    return Math.floor(base * height);
  },

  /**
   * @param {number} base Size of the base of the triangle
   * @param {number} height The height of the triangle
   *
   * @returns {number} (base * height) / 2
   */
  triangle: (base: number, height: number): number => {
    return Math.floor((base * height) / 2);
  },

  /**
   * @param {number} D larger diagonal
   * @param {number} d smaller diagonal
   *
   * @returns {number} (D * d) / 2
   */
  rhombus: (D: number, d: number): number => {
    return Math.floor((D * d) / 2);
  },

  /**
   * @param {number} B Larger base
   * @param {number} b Smaller base
   * @param {number} height Trapezoid height
   *
   * @returns {number} ((B + b) * height) / 2
   */
  trapezoid: (B: number, b: number, height: number): number => {
    return Math.floor(((B + b) * height) / 2);
  },

  /**
   * @param {number} radius Circle radius
   *
   * @returns {number} π * (radius * radius)
   */
  circle: (radius: number): number => {
    return Math.floor(PI * squared(radius));
  },
};
