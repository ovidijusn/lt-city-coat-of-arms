type Location = {
    longitude: number,
    latitude: number
};

export type Size = {
    w: number,
    h: number
};


export type CityName =
    'Jurbarkas' |
    'Joniškis' |
    'Joniškėlis' |
    'Jonava' |
    'Jieznas' |
    'Ignalina' |
    'Grigiškės' |
    'Gelgaudiškis' |
    'Garliava' |
    'Gargždai' |
    'Ežerėlis' |
    'Elektrėnai' |
    'Eišiškės' |
    'Dusetos' |
    'Dūkštas' |
    'Druskininkai' |
    'Daugai' |
    'Akmenė' |
    'Ariogala' |
    'Alytus' |
    'Anykščiai' |
    'Baltoji Vokė' |
    'Birštonas' |
    'Biržai';

export type City = {
    image: string,
    imageSize: Size,
    location: Location
};

