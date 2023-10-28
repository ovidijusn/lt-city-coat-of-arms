import { defineStore } from 'pinia';


import { City, CityName } from '@/types';

import akmeneImg from '@/assets/emblems/Akmenė.png';
import alytusImg from '@/assets/emblems/Alytus.png';
import anyksciaiImg from '@/assets/emblems/Anykščiai.png';
import ariogalaImg from '@/assets/emblems/Ariogala.png';

import baltoji_vokeImg from '@/assets/emblems/Baltoji_Vokė.png';
import birstonasImg from '@/assets/emblems/Birštonas.png';
import birzaiImg from '@/assets/emblems/Biržai.png';

import daugaiImg from '@/assets/emblems/daugai.png';
import imgDruskininkai from '@/assets/emblems/Druskininkai.png';
import imgDukstas from '@/assets/emblems/dukstas.jpg';
import imgDusetos from '@/assets/emblems/Dusetos.jpg';

import imgEisiskes from '@/assets/emblems/Eišiškės.jpg';
import imgElektrenai from '@/assets/emblems/Elektrėnai.jpg';
import imgEzerelis from '@/assets/emblems/Ežerėlis.jpg';

import imgGargzdai from '@/assets/emblems/Gargždai.jpg';
import imgGarliava from '@/assets/emblems/Garliava.jpg';
import imgGelgaudiskis from '@/assets/emblems/Gelgaudiškis.jpg';
import imgGrigiskes from '@/assets/emblems/Grigiškės.jpg';

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
    'Grigiškės': {
        image: imgGrigiskes,
        location: {
            latitude: 54.671,
            longitude: 25.091,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Gelgaudiškis': {
        image: imgGelgaudiskis,
        location: {
            latitude: 55.077,
            longitude: 22.976,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Garliava': {
        image: imgGarliava,
        location: {
            latitude: 54.828,
            longitude: 23.875,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Gargždai': {
        image: imgGargzdai,
        location: {
            latitude: 55.718,
            longitude: 21.395,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Ežerėlis': {
        image: imgEzerelis,
        location: {
            latitude: 54.883,
            longitude: 23.599,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Elektrėnai': {
        image: imgElektrenai,
        location: {
            latitude: 54.787,
            longitude: 24.671,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Eišiškės': {
        image: imgEisiskes,
        location: {
            latitude: 54.169,
            longitude: 25,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Dusetos': {
        image: imgDusetos,
        location: {
            latitude: 55.749,
            longitude: 25.846,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Dūkštas': {
        image: imgDukstas,
        location: {
            latitude: 55.52,
            longitude: 26.322,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Druskininkai': {
        image: imgDruskininkai,
        location: {
            latitude: 54.017,
            longitude: 23.977,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Daugai': {
        image: daugaiImg,
        location: {
            latitude: 54.36,
            longitude: 24.346,
        },
        imageSize: { w: 600, h: 725 }
    },
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
        imageSize: { w: 600, h: 726 }
    },
    'Anykščiai': {
        // su vainiku 
        image: anyksciaiImg,
        location: {
            latitude: 55.526,
            longitude: 25.106
        },
        imageSize: { w: 600, h: 725 }
    },
    'Ariogala': {
        image: ariogalaImg,
        location: {
            latitude: 55.263,
            longitude: 23.483
        },
        imageSize: { w: 600, h: 676 }
    },
    'Baltoji Vokė': {
        image: baltoji_vokeImg,
        location: {
            latitude: 54.454,
            longitude: 25.12
        },
        imageSize: { w: 600, h: 725 }
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
        imageSize: { w: 600, h: 724 }
    }

};
