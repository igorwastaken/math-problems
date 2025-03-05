function populationDensity(population: number, area: number): number {
  return Math.max(population / area);
}
function birthRate(birth: number, population: number): number {
  return Math.max((birth * 1000) / population);
}
function deathRate(death: number, population: number): number {
  return birthRate(death, population);
}

/**
 * The population of popular states of some countries.
 * Last update: Feb 2025
 */
export const population = {
  br: {
    sp: 11452000, // IBGE 2022
  },
  us: {
    ny: 20201249, // USCB 2023
  },
};

export { populationDensity, birthRate, deathRate };
