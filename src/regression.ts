export interface LinearRegressionOutput {
  m: number;
  b: number;
}

export interface PolynomialRegressionOutput {
  a: number;
  b: number;
  c: number;
}

export interface RegressionOutput {
  linear: LinearRegressionOutput;
  polynomial: PolynomialRegressionOutput;
}

function computePolynomialRegressionMatrix(matrix: number[]) {
  let pivot, eliminationPivot;

  for (let i = 0, j, k; i < 3; i++) {
    const pivotStartIndex = i * 4;
    pivot = matrix[pivotStartIndex + i]!;

    for (j = 0; j < 4; j++) {
      matrix[pivotStartIndex + j]! /= pivot;
    }

    for (j = 0; j < 3; j++) {
      if (j == i) {
        continue;
      }

      const nonPivotStartIndex = j * 4;
      eliminationPivot = matrix[nonPivotStartIndex + i]!;

      for (k = i; k < 4; k++) {
        matrix[nonPivotStartIndex + k]! -=
          eliminationPivot * matrix[pivotStartIndex + k]!;
      }
    }
  }
}

/**
 * @param {number[][]} input Regression input, must be an array of [x, y]
 *
 * @returns {RegressionOutput} Regression result for both linear and polynomial regression
 */
export function regression(input: number[][]): RegressionOutput {
  if (input.length === 0) {
    throw new Error('Input array must not be empty.');
  }

  let x,
    y,
    mDivisor,
    sumX = 0,
    sumY = 0,
    sumXY = 0,
    sumXSquared = 0,
    sumXCubed = 0,
    sumXPower4 = 0,
    sumXSquaredY = 0;

  for (let index = 0; index < input.length; index++) {
    x = input[index]![0]!;
    y = input[index]![1]!;

    sumX += x;
    sumY += y;
    sumXY += x * y;
    sumXSquared += x * x;
    sumXCubed += x * x * x;
    sumXPower4 += x * x * x * x;
    sumXSquaredY += x * x * y;
  }

  const m =
    (mDivisor = input.length * sumXSquared - sumX * sumX) === 0
      ? 0
      : (input.length * sumXY - sumX * sumY) / mDivisor;
  const b = (sumY - m * sumX) / input.length;

  const polMatrix = [
    input.length,
    sumX,
    sumXSquared,
    sumY,
    sumX,
    sumXSquared,
    sumXCubed,
    sumXY,
    sumXSquared,
    sumXCubed,
    sumXPower4,
    sumXSquaredY,
  ];

  computePolynomialRegressionMatrix(polMatrix);

  return {
    linear: {
      m,
      b,
    },
    polynomial: {
      a: polMatrix[3]!,
      b: polMatrix[7]!,
      c: polMatrix[11]!,
    },
  };
}
