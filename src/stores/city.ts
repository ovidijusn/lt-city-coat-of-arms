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
import imgDukstas from '@/assets/emblems/dukstas.png';
import imgDusetos from '@/assets/emblems/Dusetos.png';

import imgEisiskes from '@/assets/emblems/Eišiškės.png';
import imgElektrenai from '@/assets/emblems/Elektrėnai.png';
import imgEzerelis from '@/assets/emblems/Ežerėlis.png';

import imgGargzdai from '@/assets/emblems/Gargždai.png';
import imgGarliava from '@/assets/emblems/Garliava.png';
import imgGelgaudiskis from '@/assets/emblems/Gelgaudiškis.png';
import imgGrigiskes from '@/assets/emblems/Grigiškės.png';

import imgIgnalina from '@/assets/emblems/Ignalina.png';
import imgJieznas from '@/assets/emblems/Jieznas.png';
import imgJonava from '@/assets/emblems/Jonava.png';
import imgJoniskelis from '@/assets/emblems/Joniškėlis.png';
import imgJoniskis from '@/assets/emblems/Joniškis.png';
import imgJurbarkas from '@/assets/emblems/Jurbarkas.png';

import imgKaisiadorys from '@/assets/emblems/Kaišiadorys.png';
import imgKalvarija from '@/assets/emblems/Kalvarija.png';
import imgKaunas from '@/assets/emblems/Kaunas.png';
import imgKavarskas from '@/assets/emblems/Kavarskas.png';
import imgKazluRuda from '@/assets/emblems/Kazlų_Rūda.png';
import imgKedainiai from '@/assets/emblems/Kėdainiai.png';
import imgKelme from '@/assets/emblems/Kelmė.png';
import imgKybartai from '@/assets/emblems/Kybartai.png';
import imgKlaipeda from '@/assets/emblems/Klaipėda.png';
import imgKretinga from '@/assets/emblems/Kretinga.png';
import imgKudirkosNaumiestis from '@/assets/emblems/Kudirkos_Naumiestis.png';
import imgKupiskis from '@/assets/emblems/Kupiškis.png';
import imgKursenai from '@/assets/emblems/Kuršėnai.png';

import imgLazdijai from '@/assets/emblems/Lazdijai.png';
import imgLentvaris from '@/assets/emblems/Lentvaris.png';
import imgLinkuva from '@/assets/emblems/Linkuva.png';

import imgMarijampole from '@/assets/emblems/Marijampolė.png';
import imgMazeikiai from '@/assets/emblems/Mažeikiai.png';
import imgMoletai from '@/assets/emblems/Molėtai.png';

import imgNaujojiAkmene from '@/assets/emblems/Naujoji_Akmenė.png';
import imgNemencine from '@/assets/emblems/Nemenčinė.png';
import imgNeringa from '@/assets/emblems/Neringa.png';

import imgObeliai from '@/assets/emblems/Obeliai.png';

import imgPabrade from '@/assets/emblems/Pabradė.png';
import imgPagegiai from '@/assets/emblems/Pagėgiai.png';
import imgPakruojis from '@/assets/emblems/Pakruojis.png';
import imgPalanga from '@/assets/emblems/Palanga.png';
import imgPandelys from '@/assets/emblems/Pandėlys.png';
/*import imgPanemune from '@/assets/emblems/Panemunė.png';*/
import imgPanevezys from '@/assets/emblems/Panevėžys.png';
import imgPasvalys from '@/assets/emblems/Pasvalys.png';
import imgPlunge from '@/assets/emblems/Plungė.png';
import imgPriekule from '@/assets/emblems/Priekulė.png';
import imgPrienai from '@/assets/emblems/Prienai.png';

import imgRadviliskis from '@/assets/emblems/Radviliškis.png';
import imgRamygala from '@/assets/emblems/Ramygala.png';
import imgRaseiniai from '@/assets/emblems/Raseiniai.png';
import imgRietavas from '@/assets/emblems/Rietavas.png';
import imgRokiskis from '@/assets/emblems/Rokiškis.png';
import imgRudiskes from '@/assets/emblems/Rūdiškės.png';

import imgSalantai from '@/assets/emblems/Salantai.png';
import imgSeda from '@/assets/emblems/Seda.png';
import imgSimnas from '@/assets/emblems/Simnas.png';
import imgSkaudvile from '@/assets/emblems/Skaudvilė.png';
import imgSkuodas from '@/assets/emblems/Skuodas.png';
import imgSmalininkai from '@/assets/emblems/Smalininkai.png';
import imgSubacius from '@/assets/emblems/Subačius.png';

import imgSakiai from '@/assets/emblems/Šakiai.png';
import imgSalcininkai from '@/assets/emblems/Šalčininkai.png';
import imgSeduva from '@/assets/emblems/Šeduva.png';
import imgSiauliai from '@/assets/emblems/Šiauliai.png';
import imgSilale from '@/assets/emblems/Šilalė.png';
import imgSilute from '@/assets/emblems/Šilutė.png';
import imgSirvintos from '@/assets/emblems/Širvintos.png';
import imgSvencioneliai from '@/assets/emblems/Švenčionėliai.png';
import imgSvencionys from '@/assets/emblems/Švenčionys.png';

import imgTaurage from '@/assets/emblems/Tauragė.png';
import imgTelsiai from '@/assets/emblems/Telšiai.png';
import imgTytuvenai from '@/assets/emblems/Tytuvėnai.png';
import imgTrakai from '@/assets/emblems/Trakai.png';
import imgTroskunai from '@/assets/emblems/Troškūnai.png';

import imgUkmerge from '@/assets/emblems/Ukmergė.png';
import imgUtena from '@/assets/emblems/Utena.png';
import imgUzventis from '@/assets/emblems/Užventis.png';

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
    'Užventis': {
        image: imgUzventis,
        location: {
            latitude: 55.782,
            longitude: 22.656,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Utena': {
        image: imgUtena,
        location: {
            latitude: 55.498,
            longitude: 25.603,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Ukmergė': {
        image: imgUkmerge,
        location: {
            latitude: 55.248,
            longitude: 24.76,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Troškūnai': {
        image: imgTroskunai,
        location: {
            latitude: 55.587,
            longitude: 24.871,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Trakai': {
        image: imgTrakai,
        location: {
            latitude: 54.645,
            longitude: 24.935,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Tytuvėnai': {
        image: imgTytuvenai,
        location: {
            latitude: 55.597,
            longitude: 23.197,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Telšiai': {
        image: imgTelsiai,
        location: {
            latitude: 55.985,
            longitude: 22.249,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Tauragė': {
        image: imgTaurage,
        location: {
            latitude: 55.253,
            longitude: 22.29,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Švenčionys': {
        image: imgSvencionys,
        location: {
            latitude: 55.134,
            longitude: 26.163,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Švenčionėliai': {
        image: imgSvencioneliai,
        location: {
            latitude: 55.165,
            longitude: 25.999,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Širvintos': {
        image: imgSirvintos,
        location: {
            latitude: 55.052,
            longitude: 24.951,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Šilutė': {
        image: imgSilute,
        location: {
            latitude: 55.341,
            longitude: 21.461,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Šilalė': {
        image: imgSilale,
        location: {
            latitude: 55.49,
            longitude: 22.186,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Šiauliai': {
        image: imgSiauliai,
        location: {
            latitude: 55.934,
            longitude: 23.316,
        },
        imageSize: { w: 600, h: 612 }
    },
    'Šeduva': {
        image: imgSeduva,
        location: {
            latitude: 55.757,
            longitude: 23.757,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Šalčininkai': {
        image: imgSalcininkai,
        location: {
            latitude: 54.309,
            longitude: 25.382,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Šakiai': {
        image: imgSakiai,
        location: {
            latitude: 54.956,
            longitude: 23.04,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Subačius': {
        image: imgSubacius,
        location: {
            latitude: 55.768,
            longitude: 24.744,
        },
        imageSize: { w: 600, h: 724 }
    },
    'Smalininkai': {
        image: imgSmalininkai,
        location: {
            latitude: 55.074,
            longitude: 22.579,
        },
        imageSize: { w: 600, h: 726 }
    },
    'Skuodas': {
        image: imgSkuodas,
        location: {
            latitude: 56.269,
            longitude: 21.524,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Skaudvilė': {
        image: imgSkaudvile,
        location: {
            latitude: 55.408,
            longitude: 22.578,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Simnas': {
        image: imgSimnas,
        location: {
            latitude: 54.383,
            longitude: 23.646,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Seda': {
        image: imgSeda,
        location: {
            latitude: 56.167,
            longitude: 22.093,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Salantai': {
        image: imgSalantai,
        location: {
            latitude: 56.059,
            longitude: 21.569,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Rūdiškės': {
        image: imgRudiskes,
        location: {
            latitude: 54.521,
            longitude: 24.832,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Rokiškis': {
        image: imgRokiskis,
        location: {
            latitude: 55.954,
            longitude: 25.592,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Rietavas': {
        image: imgRietavas,
        location: {
            latitude: 55.723,
            longitude: 21.927,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Raseiniai': {
        image: imgRaseiniai,
        location: {
            latitude: 55.378,
            longitude: 23.117,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Ramygala': {
        image: imgRamygala,
        location: {
            latitude: 55.51,
            longitude: 24.305,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Radviliškis': {
        image: imgRadviliskis,
        location: {
            latitude: 55.816,
            longitude: 23.551,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Prienai': {
        image: imgPrienai,
        location: {
            latitude: 54.634,
            longitude: 23.943,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Priekulė': {
        image: imgPriekule,
        location: {
            latitude: 55.555,
            longitude: 21.318,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Plungė': {
        image: imgPlunge,
        location: {
            latitude: 55.914,
            longitude: 21.853,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Pasvalys': {
        image: imgPasvalys,
        location: {
            latitude: 56.062,
            longitude: 24.397,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Panevėžys': {
        image: imgPanevezys,
        location: {
            latitude: 55.734,
            longitude: 24.358,
        },
        imageSize: { w: 600, h: 725 }
    },
    /*'Panemunė': {
        image: imgPanemune,
        location: {
            latitude: 55.087,
            longitude: 21.912,
        },
        imageSize: { w: 600, h: 725 }
    },*/
    'Pandėlys': {
        image: imgPandelys,
        location: {
            latitude: 56.023,
            longitude: 25.227,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Palanga': {
        image: imgPalanga,
        location: {
            latitude: 55.923,
            longitude: 21.068,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Pakruojis': {
        image: imgPakruojis,
        location: {
            latitude: 55.978,
            longitude: 23.845,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Pagėgiai': {
        image: imgPagegiai,
        location: {
            latitude: 55.133,
            longitude: 21.91,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Pabradė': {
        image: imgPabrade,
        location: {
            latitude: 54.983,
            longitude: 25.766,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Obeliai': {
        image: imgObeliai,
        location: {
            latitude: 55.941,
            longitude: 25.796,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Neringa': {
        image: imgNeringa,
        location: {
            latitude: 55.306,
            longitude: 20.996,
        },
        imageSize: { w: 600, h: 726 }
    },
    'Nemenčinė': {
        image: imgNemencine,
        location: {
            latitude: 54.848,
            longitude: 25.469,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Naujoji Akmenė': {
        image: imgNaujojiAkmene,
        location: {
            latitude: 56.325,
            longitude: 22.88,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Molėtai': {
        image: imgMoletai,
        location: {
            latitude: 55.232,
            longitude: 25.419,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Mažeikiai': {
        image: imgMazeikiai,
        location: {
            latitude: 56.311,
            longitude: 22.348,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Marijampolė': {
        image: imgMarijampole,
        location: {
            latitude: 54.556,
            longitude: 23.35,
        },
        imageSize: { w: 600, h: 724 }
    },
    'Linkuva': {
        image: imgLinkuva,
        location: {
            latitude: 56.086,
            longitude: 23.974,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Lentvaris': {
        image: imgLentvaris,
        location: {
            latitude: 54.643,
            longitude: 25.05,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Lazdijai': {
        image: imgLazdijai,
        location: {
            latitude: 54.235,
            longitude: 23.511,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Kuršėnai': {
        image: imgKursenai,
        location: {
            latitude: 56.004,
            longitude: 22.933,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Kupiškis': {
        image: imgKupiskis,
        location: {
            latitude: 55.839,
            longitude: 24.976,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Kudirkos Naumiestis': {
        image: imgKudirkosNaumiestis,
        location: {
            latitude: 54.774,
            longitude: 22.863,
        },
        imageSize: { w: 600, h: 416 }
    },
    'Kretinga': {
        image: imgKretinga,
        location: {
            latitude: 55.89,
            longitude: 21.242,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Klaipėda': {
        image: imgKlaipeda,
        location: {
            latitude: 55.713,
            longitude: 21.135,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Kybartai': {
        image: imgKybartai,
        location: {
            latitude: 54.643,
            longitude: 22.751,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Kelmė': {
        image: imgKelme,
        location: {
            latitude: 55.629,
            longitude: 22.931,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Kėdainiai': {
        image: imgKedainiai,
        location: {
            latitude: 55.289,
            longitude: 23.976,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Kazlų Rūda': {
        image: imgKazluRuda,
        location: {
            latitude: 54.752,
            longitude: 23.499,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Kavarskas': {
        image: imgKavarskas,
        location: {
            latitude: 55.434,
            longitude: 24.928,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Kaunas': {
        image: imgKaunas,
        location: {
            latitude: 54.898,
            longitude: 23.904,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Kalvarija': {
        image: imgKalvarija,
        location: {
            latitude: 54.414,
            longitude: 23.227,
        },
        imageSize: { w: 600, h: 719 }
    },
    'Kaišiadorys': {
        image: imgKaisiadorys,
        location: {
            latitude: 54.86,
            longitude: 24.454,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Jurbarkas': {
        image: imgJurbarkas,
        location: {
            latitude: 55.078,
            longitude: 22.765,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Joniškis': {
        image: imgJoniskis,
        location: {
            latitude: 56.241,
            longitude: 23.615,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Joniškėlis': {
        image: imgJoniskelis,
        location: {
            latitude: 56.023,
            longitude: 24.17,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Jonava': {
        image: imgJonava,
        location: {
            latitude: 55.074,
            longitude: 24.276,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Jieznas': {
        image: imgJieznas,
        location: {
            latitude: 54.601,
            longitude: 24.175,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Ignalina': {
        image: imgIgnalina,
        location: {
            latitude: 55.34,
            longitude: 26.161,
        },
        imageSize: { w: 600, h: 725 }
    },
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
        imageSize: { w: 600, h: 573 }
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
        imageSize: { w: 600, h: 662 }
    }

};
