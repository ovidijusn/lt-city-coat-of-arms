import random from 'random';

function genSeed(): string {
    const today = new Date();

    let seed = '' + today.getFullYear();
    seed += (today.getMonth() + 1 > 9 ? '' : '0') + (today.getMonth() + 1);
    seed += (today.getDate() > 9 ? '' : '0') + today.getDate();

    if ('development' === import.meta.env.MODE) {
        seed += (today.getHours() > 9 ? '' : '0') + today.getHours();
        seed += (today.getMinutes() > 9 ? '' : '0') + today.getMinutes();
    }

    return seed;
}
export const seed = genSeed();
export const seededRandom = random.clone(seed);

export function chooseRandom<T>(list: T[]): T {
    return seededRandom.choice(list) as T;
}