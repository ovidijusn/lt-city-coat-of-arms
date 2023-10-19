type Location = {
    longitude: number,
    latitude: number
};

export type Size = {
    w: number,
    h: number
};

export type City = {
    name: string,
    image: string,
    imageSize: Size,
    location: Location
};

export type Fragment = {
    image: string,
    width: number,
    height: number,
    offsetX: number,
    offsetY: number
};

export type FragmentState = {
    flipped: boolean,
    index: number
};

export type GameState = {
    city: City,
    guesses: Guess[],
    fragmentStates: FragmentState[]
};

export type Guess = {
    cityName: string,
    distance: number,
    direction: string
};