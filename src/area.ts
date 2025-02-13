import { PI } from './numbers.js';

/**
 * @description Calculate the area of geometric shapes
 */
export const area = {
  /**
   * @param base Size of the base of the rectangle
   * @param height The height of the rectangle
   *
   * base * height
   */
  rect: (base: number, height: number): AreaResult => {
    return {
      area: Math.floor(base * height),
    };
  },
  /**
   * @param base Size of the base of the triangle
   * @param height The height of the triangle
   *
   * (base * height) / 2
   */
  triangle: (base: number, height: number): AreaResult => {
    return {
      area: Math.floor((base * height) / 2),
    };
  },
  /**
   * @param D larger diagonal
   * @param d smaller diagonal
   *
   * (D * d) / 2
   */
  rhombus: (D: number, d: number): AreaResult => {
    return {
      area: Math.floor((D * d) / 2),
    };
  },
  /**
   * @param B Larger base
   * @param b Smaller base
   * @param height Trapezoid height
   *
   * ((B + b) * height) / 2
   */
  trapezoid: (B: number, b: number, height: number): AreaResult => {
    return {
      area: Math.floor(((B + b) * height) / 2),
    };
  },
  /**
   * @param radius Circle radius
   *
   * π * (radius * radius)
   */
  circle: (radius: number): AreaResult => {
    return {
      area: Math.floor(PI * (radius * radius)),
    };
  },
};

export type AreaResult = {
  area?: number;
  perimeter?: number;
};
