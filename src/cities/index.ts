import akmeneImg from './emblems/300px-akmene.png';

type Coord = {
    long: number,
    lang: number
}

export type City = {
    name: string,
    image: string,
    location: Coord
}

export const cities: City[] = [
    {
        name: 'Akmenė',
        image: akmeneImg,
        location: {
            lang: 56.246,
            long: 22.755,
        }
    },
    {
        name: 'Alytus',
        image: 'alytus.png',
        location: {
            lang: 54.396,
            long: 24.046
        }
    },
    {
        name: 'Anykščiai',
        image: 'anyksciai.png',
        location: {
            lang: 55.526,
            long: 25.106
        }
    }
]