export function genSeed(): [string, number] {
    const today = new Date();

    let seed = '' + today.getFullYear();
    const month = today.getMonth() + 1;
    seed += '-' + (month > 9 ? '' : '0') + month;
    seed += '-' + (today.getDate() > 9 ? '' : '0') + today.getDate();

    return [seed, today.getFullYear() + month * today.getDate()];
}

export const [seed, seedNumber] = genSeed();

export function chooseRandom<T>(list: T[]): T {
    return list[seedNumber % list.length];
}