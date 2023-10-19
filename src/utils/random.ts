import random from 'random';


const today = new Date();
const seed = `${today.getFullYear()}${today.getMonth()}${today.getDay()}`;
export const seededRandom = random.clone(seed);

export function choice<T>(list: T[]): T {
    return seededRandom.choice(list) as T;
}