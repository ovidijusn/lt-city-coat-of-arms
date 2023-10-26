import { getDistance, getCompassDirection, getRhumbLineBearing } from 'geolib';
import { City } from '@/types';

export function distance(city1: City, city2: City): number {
    return Math.round(getDistance(city1.location, city2.location, 1) / 1000)
}

export function direction(from: City, to: City): string {
console.log(getRhumbLineBearing(from.location, to.location))
    return getCompassDirection(from.location, to.location);
}