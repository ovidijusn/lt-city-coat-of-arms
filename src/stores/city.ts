import { defineStore } from 'pinia';


import { City, CityName } from '@/types';

import akmeneImg from '@/assets/emblems/akmene.png';
import alytusImg from '@/assets/emblems/alytus.png';
import anyksciaiImg from '@/assets/emblems/anyksciai.png';
import ariogalaImg from '@/assets/emblems/ariogala.png';
import baltoji_vokeImg from '@/assets/emblems/baltoji_voke.png';
import birstonasImg from '@/assets/emblems/birstonas.png';
import birzaiImg from '@/assets/emblems/birzai.png';

type State = { [key in CityName]: City };

export const useCityStore = defineStore('city', {
    state: (): State => cities,
    getters: {
        allNames: (): CityName[] => Object.keys(cities).sort() as CityName[],
    },
    actions: {
        city(cityName: CityName): City {
            return cities[cityName];
        }
    }
});

const cities = {
    'Akmenė': {
        image: akmeneImg,
        location: {
            latitude: 56.246,
            longitude: 22.755,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Alytus': {
        image: alytusImg,
        location: {
            latitude: 54.396,
            longitude: 24.046
        },
        imageSize: { w: 600, h: 710 }
    },
    'Anykščiai': {
        // su vainiku 
        image: anyksciaiImg,
        location: {
            latitude: 55.526,
            longitude: 25.106
        },
        imageSize: { w: 600, h: 714 }
    },
    'Ariogala': {
        image: ariogalaImg,
        location: {
            latitude: 55.263,
            longitude: 23.483
        },
        imageSize: { w: 600, h: 717 }
    },
    'Baltoji Vokė': {
        image: baltoji_vokeImg,
        location: {
            latitude: 54.454,
            longitude: 25.12
        },
        imageSize: { w: 600, h: 713 }
    },
    'Birštonas': {
        image: birstonasImg,
        location: {
            latitude: 54.604,
            longitude: 24.034
        },
        imageSize: { w: 600, h: 725 }
    },
    'Biržai': {
        // su vainiku 
        image: birzaiImg,
        location: {
            latitude: 56.2,
            longitude: 24.757
        },
        imageSize: { w: 600, h: 705 }
    }

};
