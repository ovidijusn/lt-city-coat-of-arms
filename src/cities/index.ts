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
        image: alytusImg,
        location: {
            lang: 54.396,
            long: 24.046
        }
    },
    {
        // su vainiku 
        name: 'Anykščiai',
        image: anyksciaiImg,
        location: {
            lang: 55.526,
            long: 25.106
        }
    },
    {
        name: 'Ariogala',
        image: ariogalaImg,
        location: {
            lang: 55.263,
            long: 23.483
        }
    },
    {
        name: 'Baltoji Vokė',
        image: baltoji_vokeImg,
        location: {
            lang: 54.454,
            long: 25.12
        }
    },
    {
        name: 'Birštonas',
        image: birstonasImg,
        location: {
            lang: 54.604,
            long: 24.034
        }
    },
    {
        // su vainiku 
        name: 'Biržai',
        image: birzaiImg,
        location: {
            lang: 56.2,
            long: 24.757
        }
    }
]