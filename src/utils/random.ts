import random from 'random';


const today = new Date();
export const seed = `${today.getFullYear()}${today.getMonth()}${today.getDay()}`;
export const seededRandom = random.clone(seed);

export function chooseRandom<T>(list: T[]): T {
    return seededRandom.choice(list) as T;
}