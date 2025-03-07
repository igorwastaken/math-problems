import { describe, expect, test } from 'vitest';
import { haversineDistance, calculateBearing, midpoint } from '../src/index.js';

describe('Geography Calculations', () => {
  test('haversineDistance should return the correct distance between São Paulo and Rio de Janeiro', () => {
    // São Paulo: (-23.5489, -46.6388) and Rio de Janeiro: (-22.9035, -43.2096)
    // Expected distance is approximately 357 km
    const distance = haversineDistance(-23.5489, -46.6388, -22.9035, -43.2096);
    expect(distance).toBeCloseTo(357, 0);
  });

  test('calculateBearing should return the correct initial bearing from São Paulo to Rio de Janeiro', () => {
    // Expected bearing (forward azimuth) is approximately 81.8°
    const bearing = calculateBearing(-23.5489, -46.6388, -22.9035, -43.2096);
    expect(bearing).toBeCloseTo(81.8, 0);
  });

  test('midpoint should return a midpoint between São Paulo and Rio de Janeiro', () => {
    const mid = midpoint(-23.5489, -46.6388, -22.9035, -43.2096);
    // Verify the latitude is between the two latitudes
    expect(mid.latitude).toBeGreaterThanOrEqual(-23.5489);
    expect(mid.latitude).toBeLessThanOrEqual(-22.9035);
    // Verify the longitude is between the two longitudes
    expect(mid.longitude).toBeGreaterThanOrEqual(-46.6388);
    expect(mid.longitude).toBeLessThanOrEqual(-43.2096);
  });
});
