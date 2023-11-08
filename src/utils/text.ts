const charMap = [
    ['ą', 'a'],
    ['č', 'c'],
    ['ę', 'e'],
    ['ė', 'e'],
    ['į', 'i'],
    ['š', 's'],
    ['ų', 'u'],
    ['ū', 'u'],
    ['ž', 'z'],
    ['Ą', 'A'],
    ['Č', 'C'],
    ['Ę', 'E'],
    ['Ė', 'E'],
    ['Į', 'I'],
    ['Š', 'S'],
    ['Ų', 'U'],
    ['Ū', 'U'],
    ['Ž', 'Z'],
];

export function normalize(text: string): string {
    return charMap.reduce((acum, curr) => acum.replace(curr[0], curr[1]), text);
}