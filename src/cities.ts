import akmeneImg from '@/assets/emblems/akmene.png';
import alytusImg from '@/assets/emblems/alytus.png';
import anyksciaiImg from '@/assets/emblems/anyksciai.png';
import ariogalaImg from '@/assets/emblems/ariogala.png';
import baltoji_vokeImg from '@/assets/emblems/baltoji_voke.png';
import birstonasImg from '@/assets/emblems/birstonas.png';
import birzaiImg from '@/assets/emblems/birzai.png';

import { City, Size } from '@/types';

function defaultWidth(h: number): Size {
    return { w: 600, h };
}

export function cityByName(cityName: string): City | undefined {
    return cities.find((city) => city.name === cityName);
}

export const cities: City[] = [
    {
        name: 'Akmenė',
        image: akmeneImg,
        location: {
            latitude: 56.246,
            longitude: 22.755,
        },
        imageSize: defaultWidth(725)
    },
    {
        name: 'Alytus',
        image: alytusImg,
        location: {
            latitude: 54.396,
            longitude: 24.046
        },
        imageSize: defaultWidth(710)
    },
    {
        // su vainiku 
        name: 'Anykščiai',
        image: anyksciaiImg,
        location: {
            latitude: 55.526,
            longitude: 25.106
        },
        imageSize: defaultWidth(714)
    },
    {
        name: 'Ariogala',
        image: ariogalaImg,
        location: {
            latitude: 55.263,
            longitude: 23.483
        },
        imageSize: defaultWidth(717)
    },
    {
        name: 'Baltoji Vokė',
        image: baltoji_vokeImg,
        location: {
            latitude: 54.454,
            longitude: 25.12
        },
        imageSize: defaultWidth(713)
    },
    {
        name: 'Birštonas',
        image: birstonasImg,
        location: {
            latitude: 54.604,
            longitude: 24.034
        },
        imageSize: defaultWidth(725)
    },
    {
        // su vainiku 
        name: 'Biržai',
        image: birzaiImg,
        location: {
            latitude: 56.2,
            longitude: 24.757
        },
        imageSize: defaultWidth(705)
    }
];

console.log(cities)