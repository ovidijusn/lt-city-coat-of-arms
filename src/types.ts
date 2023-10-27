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
