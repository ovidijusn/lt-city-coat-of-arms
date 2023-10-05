type Location = {
    longitude: number,
    latitude: number
};

export type Size = {
    w: number,
    h: number
};


export type CityName = 'Akmenė' | 'Ariogala' | 'Alytus' | 'Anykščiai' | 'Baltoji Vokė' | 'Birštonas' | 'Biržai';

export type City = {
    image: string,
    imageSize: Size,
    location: Location
};

