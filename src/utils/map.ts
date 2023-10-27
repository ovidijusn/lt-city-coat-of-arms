import { getDistance, getCompassDirection, getRhumbLineBearing } from 'geolib';
import { City } from '@/types';

export function distance(city1: City, city2: City): number {
    return Math.round(getDistance(city1.location, city2.location, 1) / 1000)
}

export function direction(from: City, to: City): string {
    console.log(getRhumbLineBearing(from.location, to.location))
    return getCompassDirection(from.location, to.location);
}

const step = 45;
const halfStep = step / 2;
const ranges = [
    {
        to: halfStep + 0 * step,
        arrow: '⬆️'
    },
    {
        to: halfStep + 1 * step,
        arrow: '↗️'
    },
    {
        to: halfStep + 2 * step,
        arrow: '➡️'
    },
    {
        to: halfStep + 3 * step,
        arrow: '↘️'
    },
    {
        to: halfStep + 4 * step,
        arrow: '⬇️'
    },
    {
        to: halfStep + 5 * step,
        arrow: '↙️'
    },
    {
        to: halfStep + 6 * step,
        arrow: '⬅️'
    },
    {
        to: halfStep + 7 * step,
        arrow: '↖️'
    },
    {
        to: 360,
        arrow: '⬆️'
    }
]

export function emojiDirection(from: City, to: City): string | undefined {
    if(from.name === to.name){
        return '🎯';
    }
    const angle = getRhumbLineBearing(from.location, to.location);
    console.log(angle)

    ranges.find((range) => angle <= range.to)

    return ranges.find((range) => angle <= range.to)?.arrow;
}