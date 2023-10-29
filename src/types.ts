type Location = {
    longitude: number,
    latitude: number
};

export type Size = {
    w: number,
    h: number
};


export type CityName =
    'Salantai' | 'Seda' |
    'Simnas' | 'Skaudvilė' | 'Skuodas' |
    'Smalininkai' | 'Subačius' | 'Radviliškis' |
    'Ramygala' | 'Raseiniai' | 'Rietavas' |
    'Rokiškis' | 'Rūdiškės' | 'Obeliai' |
    'Pabradė' | 'Pagėgiai' | 'Pakruojis' |
    'Palanga' | 'Pandėlys' | /*'Panemunė' |*/
    'Panevėžys' | 'Pasvalys' | 'Plungė' |
    'Priekulė' | 'Prienai' | 'Neringa' |
    'Nemenčinė' | 'Naujoji Akmenė' | 'Molėtai' |
    'Mažeikiai' | 'Marijampolė' | 'Linkuva' |
    'Lentvaris' | 'Lazdijai' | 'Kuršėnai' |
    'Kupiškis' | 'Kudirkos Naumiestis' | 'Kretinga' |
    'Klaipėda' | 'Kybartai' | 'Kelmė' |
    'Kėdainiai' | 'Kazlų Rūda' | 'Kavarskas' |
    'Kaunas' | 'Kalvarija' | 'Kaišiadorys' |
    'Jurbarkas' | 'Joniškis' | 'Joniškėlis' |
    'Jonava' | 'Jieznas' | 'Ignalina' |
    'Grigiškės' | 'Gelgaudiškis' | 'Garliava' |
    'Gargždai' | 'Ežerėlis' | 'Elektrėnai' |
    'Eišiškės' | 'Dusetos' | 'Dūkštas' |
    'Druskininkai' | 'Daugai' | 'Akmenė' |
    'Ariogala' | 'Alytus' | 'Anykščiai' |
    'Baltoji Vokė' | 'Birštonas' | 'Biržai';

export type City = {
    image: string,
    imageSize: Size,
    location: Location
};

