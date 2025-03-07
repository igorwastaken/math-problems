/**
 * Calculates force (in Newtons) given mass (kg) and acceleration (m/s²).
 * Formula: F = m * a
 * @param mass - mass in kilograms
 * @param acceleration - acceleration in m/s²
 * @returns force in Newtons
 */
export const force = (mass: number, acceleration: number): number =>
  mass * acceleration;

/**
 * Calculates kinetic energy (in Joules) given mass (kg) and velocity (m/s).
 * Formula: KE = 0.5 * m * v²
 * @param mass - mass in kilograms
 * @param velocity - velocity in m/s
 * @returns kinetic energy in Joules
 */
export const kineticEnergy = (mass: number, velocity: number): number =>
  0.5 * mass * velocity ** 2;

/**
 * Calculates gravitational potential energy (in Joules) given mass (kg) and height (m).
 * Formula: PE = m * g * h, where g (gravitational acceleration) is 9.81 m/s² by default.
 * @param mass - mass in kilograms
 * @param height - height in meters
 * @param g - gravitational acceleration (default: 9.81 m/s²)
 * @returns potential energy in Joules
 */
export const potentialEnergy = (
  mass: number,
  height: number,
  g: number = 9.81,
): number => mass * g * height;

/**
 * Calculates momentum (in kg·m/s) given mass (kg) and velocity (m/s).
 * Formula: p = m * v
 * @param mass - mass in kilograms
 * @param velocity - velocity in m/s
 * @returns momentum in kg·m/s
 */
export const momentum = (mass: number, velocity: number): number =>
  mass * velocity;
