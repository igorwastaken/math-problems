/**
 * Converts degrees to radians.
 * @param degrees - Value in degrees.
 * @returns Value in radians.
 */
const toRadians = (degrees: number): number => degrees * (Math.PI / 180);

/**
 * Converts radians to degrees.
 * @param radians - Value in radians.
 * @returns Value in degrees.
 */
const toDegrees = (radians: number): number => radians * (180 / Math.PI);

/**
 * Calculates the great-circle distance between two points on Earth using the Haversine formula.
 * @param lat1 - Latitude of the first point in degrees.
 * @param lon1 - Longitude of the first point in degrees.
 * @param lat2 - Latitude of the second point in degrees.
 * @param lon2 - Longitude of the second point in degrees.
 * @param radius - Radius of the Earth in kilometers (default: 6371 km).
 * @returns Distance between the two points in kilometers.
 */
export const haversineDistance = (
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number,
  radius: number = 6371,
): number => {
  const dLat = toRadians(lat2 - lat1);
  const dLon = toRadians(lon2 - lon1);
  const radLat1 = toRadians(lat1);
  const radLat2 = toRadians(lat2);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(radLat1) * Math.cos(radLat2) * Math.sin(dLon / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return radius * c;
};

/**
 * Calculates the initial bearing (forward azimuth) from the first point to the second point.
 * @param lat1 - Latitude of the first point in degrees.
 * @param lon1 - Longitude of the first point in degrees.
 * @param lat2 - Latitude of the second point in degrees.
 * @param lon2 - Longitude of the second point in degrees.
 * @returns Bearing in degrees from North (0° to 360°).
 */
export const calculateBearing = (
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number,
): number => {
  const radLat1 = toRadians(lat1);
  const radLat2 = toRadians(lat2);
  const dLon = toRadians(lon2 - lon1);
  const y = Math.sin(dLon) * Math.cos(radLat2);
  const x =
    Math.cos(radLat1) * Math.sin(radLat2) -
    Math.sin(radLat1) * Math.cos(radLat2) * Math.cos(dLon);
  let bearing = toDegrees(Math.atan2(y, x));
  // Normalize the bearing to a value between 0° and 360°
  bearing = (bearing + 360) % 360;
  return bearing;
};

/**
 * Calculates the midpoint between two geographical coordinates.
 * @param lat1 - Latitude of the first point in degrees.
 * @param lon1 - Longitude of the first point in degrees.
 * @param lat2 - Latitude of the second point in degrees.
 * @param lon2 - Longitude of the second point in degrees.
 * @returns An object containing the latitude and longitude of the midpoint in degrees.
 */
export const midpoint = (
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number,
): { latitude: number; longitude: number } => {
  const radLat1 = toRadians(lat1);
  const radLat2 = toRadians(lat2);
  const dLon = toRadians(lon2 - lon1);

  const Bx = Math.cos(radLat2) * Math.cos(dLon);
  const By = Math.cos(radLat2) * Math.sin(dLon);

  const midLat = Math.atan2(
    Math.sin(radLat1) + Math.sin(radLat2),
    Math.sqrt((Math.cos(radLat1) + Bx) ** 2 + By ** 2),
  );
  const midLon = toRadians(lon1) + Math.atan2(By, Math.cos(radLat1) + Bx);

  return {
    latitude: toDegrees(midLat),
    longitude: toDegrees(midLon),
  };
};
