import akmeneImg from './emblems/akmene.png';
import alytusImg from './emblems/alytus.png';
import anyksciaiImg from './emblems/anyksciai.png';
import ariogalaImg from './emblems/ariogala.png';
import baltoji_vokeImg from './emblems/baltoji_voke.png';
import birstonasImg from './emblems/birstonas.png';
import birzaiImg from './emblems/birzai.png';

type Coord = {
    long: number,
    lang: number
}

type Size = {
    w: number,
    h: number
}

function defaultWidth(h: number): Size {
    return { w: 600, h };
}

export type City = {
    name: string,
    image: string,
    imageSize: Size,
    location: Coord
}

export const cities: City[] = [
    {
        name: 'Akmenė',
        image: akmeneImg,
        location: {
            lang: 56.246,
            long: 22.755,
        },
        imageSize: defaultWidth(725)
    },
    {
        name: 'Alytus',
        image: alytusImg,
        location: {
            lang: 54.396,
            long: 24.046
        },
        imageSize: defaultWidth(710)
    },
    {
        // su vainiku 
        name: 'Anykščiai',
        image: anyksciaiImg,
        location: {
            lang: 55.526,
            long: 25.106
        },
        imageSize: defaultWidth(714)
    },
    {
        name: 'Ariogala',
        image: ariogalaImg,
        location: {
            lang: 55.263,
            long: 23.483
        },
        imageSize: defaultWidth(717)
    },
    {
        name: 'Baltoji Vokė',
        image: baltoji_vokeImg,
        location: {
            lang: 54.454,
            long: 25.12
        },
        imageSize: defaultWidth(713)
    },
    {
        name: 'Birštonas',
        image: birstonasImg,
        location: {
            lang: 54.604,
            long: 24.034
        },
        imageSize: defaultWidth(725)
    },
    {
        // su vainiku 
        name: 'Biržai',
        image: birzaiImg,
        location: {
            lang: 56.2,
            long: 24.757
        },
        imageSize: defaultWidth(705)
    }
]