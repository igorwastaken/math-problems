export interface interpolationInput {
  function: (input: number) => number;
  value: number;
  points: number[];
}

function getNewtonInterpolationB(
  input: interpolationInput,
  end: number,
  start: number,
): number {
  if (end == start) {
    return input.function(input.points[start]!);
  }

  return (
    (getNewtonInterpolationB(input, end, start + 1) -
      getNewtonInterpolationB(input, end - 1, start)) /
    (input.points[end]! - input.points[start]!)
  );
}

/**
 * @param {interpolationInput} input Interpolation input
 *
 * @returns {number} Interpolation result through Newton Interpolation
 */
export function interpolation(input: interpolationInput): number {
  if (input.points.length < 1) {
    throw new Error('Points array must not be empty.');
  }

  let multiplier,
    output = input.function(input.points[0]!);

  for (let multiplierIndex, index = 1; index < input.points.length; index++) {
    for (
      multiplier = 1, multiplierIndex = 0;
      multiplierIndex < index;
      multiplierIndex++
    ) {
      multiplier *= input.value - input.points[multiplierIndex]!;
    }

    output += multiplier * getNewtonInterpolationB(input, multiplierIndex, 0);
  }

  return output;
}
