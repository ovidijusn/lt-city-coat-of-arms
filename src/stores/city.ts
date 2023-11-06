import { defineStore } from 'pinia';


import { City, CityName } from '@/types';

type State = { [key in CityName]: City };

export const useCityStore = defineStore('city', {
    state: (): State => cities,
    getters: {
        allNames: (): CityName[] => Object.keys(cities).sort((a, b) => a.localeCompare(b)) as CityName[],
    },
    actions: {
        city(cityName: CityName): City {
            return cities[cityName];
        }
    }
});

const cities = {
    'Žiežmariai': {
        location: {
            latitude: 54.806,
            longitude: 24.443,
        },
        imageSize: { w: 600, h: 1099 }
    },
    'Žagarė': {
        location: {
            latitude: 56.358,
            longitude: 23.255,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Zarasai': {
        location: {
            latitude: 55.73,
            longitude: 26.247,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Visaginas': {
        location: {
            latitude: 55.6,
            longitude: 26.437,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Virbalis': {
        location: {
            latitude: 54.626,
            longitude: 22.823,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Vilnius': {
        location: {
            latitude: 54.687,
            longitude: 25.283,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Vilkija': {
        location: {
            latitude: 55.04,
            longitude: 23.583,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Vilkaviškis': {
        location: {
            latitude: 54.65,
            longitude: 23.036,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Vievis': {
        location: {
            latitude: 54.769,
            longitude: 24.816,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Viekšniai': {
        location: {
            latitude: 56.236,
            longitude: 22.513,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Venta': {
        location: {
            latitude: 56.19,
            longitude: 22.689,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Veisiejai': {
        location: {
            latitude: 54.1,
            longitude: 23.695,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Varniai': {
        location: {
            latitude: 55.743,
            longitude: 22.371,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Varėna': {
        location: {
            latitude: 54.212,
            longitude: 24.567,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Vabalninkas': {
        location: {
            latitude: 55.98,
            longitude: 24.747,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Užventis': {
        location: {
            latitude: 55.782,
            longitude: 22.656,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Utena': {
        location: {
            latitude: 55.498,
            longitude: 25.603,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Ukmergė': {
        location: {
            latitude: 55.248,
            longitude: 24.76,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Troškūnai': {
        location: {
            latitude: 55.587,
            longitude: 24.871,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Trakai': {
        location: {
            latitude: 54.645,
            longitude: 24.935,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Tytuvėnai': {
        location: {
            latitude: 55.597,
            longitude: 23.197,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Telšiai': {
        location: {
            latitude: 55.985,
            longitude: 22.249,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Tauragė': {
        location: {
            latitude: 55.253,
            longitude: 22.29,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Švenčionys': {
        location: {
            latitude: 55.134,
            longitude: 26.163,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Švenčionėliai': {
        location: {
            latitude: 55.165,
            longitude: 25.999,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Širvintos': {
        location: {
            latitude: 55.052,
            longitude: 24.951,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Šilutė': {
        location: {
            latitude: 55.341,
            longitude: 21.461,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Šilalė': {
        location: {
            latitude: 55.49,
            longitude: 22.186,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Šiauliai': {
        location: {
            latitude: 55.934,
            longitude: 23.316,
        },
        imageSize: { w: 600, h: 612 }
    },
    'Šeduva': {
        location: {
            latitude: 55.757,
            longitude: 23.757,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Šalčininkai': {
        location: {
            latitude: 54.309,
            longitude: 25.382,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Šakiai': {
        location: {
            latitude: 54.956,
            longitude: 23.04,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Subačius': {
        location: {
            latitude: 55.768,
            longitude: 24.744,
        },
        imageSize: { w: 600, h: 724 }
    },
    'Smalininkai': {
        location: {
            latitude: 55.074,
            longitude: 22.579,
        },
        imageSize: { w: 600, h: 726 }
    },
    'Skuodas': {
        location: {
            latitude: 56.269,
            longitude: 21.524,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Skaudvilė': {
        location: {
            latitude: 55.408,
            longitude: 22.578,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Simnas': {
        location: {
            latitude: 54.383,
            longitude: 23.646,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Seda': {
        location: {
            latitude: 56.167,
            longitude: 22.093,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Salantai': {
        location: {
            latitude: 56.059,
            longitude: 21.569,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Rūdiškės': {
        location: {
            latitude: 54.521,
            longitude: 24.832,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Rokiškis': {
        location: {
            latitude: 55.954,
            longitude: 25.592,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Rietavas': {
        location: {
            latitude: 55.723,
            longitude: 21.927,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Raseiniai': {
        location: {
            latitude: 55.378,
            longitude: 23.117,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Ramygala': {
        location: {
            latitude: 55.51,
            longitude: 24.305,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Radviliškis': {
        location: {
            latitude: 55.816,
            longitude: 23.551,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Prienai': {
        location: {
            latitude: 54.634,
            longitude: 23.943,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Priekulė': {
        location: {
            latitude: 55.555,
            longitude: 21.318,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Plungė': {
        location: {
            latitude: 55.914,
            longitude: 21.853,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Pasvalys': {
        location: {
            latitude: 56.062,
            longitude: 24.397,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Panevėžys': {
        location: {
            latitude: 55.734,
            longitude: 24.358,
        },
        imageSize: { w: 600, h: 725 }
    },
    /*'Panemunė': {
                location: {
            latitude: 55.087,
            longitude: 21.912,
        },
        imageSize: { w: 600, h: 725 }
    },*/
    'Pandėlys': {
        location: {
            latitude: 56.023,
            longitude: 25.227,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Palanga': {
        location: {
            latitude: 55.923,
            longitude: 21.068,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Pakruojis': {
        location: {
            latitude: 55.978,
            longitude: 23.845,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Pagėgiai': {
        location: {
            latitude: 55.133,
            longitude: 21.91,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Pabradė': {
        location: {
            latitude: 54.983,
            longitude: 25.766,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Obeliai': {
        location: {
            latitude: 55.941,
            longitude: 25.796,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Neringa': {
        location: {
            latitude: 55.306,
            longitude: 20.996,
        },
        imageSize: { w: 600, h: 726 }
    },
    'Nemenčinė': {
        location: {
            latitude: 54.848,
            longitude: 25.469,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Naujoji Akmenė': {
        location: {
            latitude: 56.325,
            longitude: 22.88,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Molėtai': {
        location: {
            latitude: 55.232,
            longitude: 25.419,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Mažeikiai': {
        location: {
            latitude: 56.311,
            longitude: 22.348,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Marijampolė': {
        location: {
            latitude: 54.556,
            longitude: 23.35,
        },
        imageSize: { w: 600, h: 724 }
    },
    'Linkuva': {
        location: {
            latitude: 56.086,
            longitude: 23.974,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Lentvaris': {
        location: {
            latitude: 54.643,
            longitude: 25.05,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Lazdijai': {
        location: {
            latitude: 54.235,
            longitude: 23.511,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Kuršėnai': {
        location: {
            latitude: 56.004,
            longitude: 22.933,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Kupiškis': {
        location: {
            latitude: 55.839,
            longitude: 24.976,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Kudirkos Naumiestis': {
        location: {
            latitude: 54.774,
            longitude: 22.863,
        },
        imageSize: { w: 600, h: 416 }
    },
    'Kretinga': {
        location: {
            latitude: 55.89,
            longitude: 21.242,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Klaipėda': {
        location: {
            latitude: 55.713,
            longitude: 21.135,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Kybartai': {
        location: {
            latitude: 54.643,
            longitude: 22.751,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Kelmė': {
        location: {
            latitude: 55.629,
            longitude: 22.931,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Kėdainiai': {
        location: {
            latitude: 55.289,
            longitude: 23.976,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Kazlų Rūda': {
        location: {
            latitude: 54.752,
            longitude: 23.499,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Kavarskas': {
        location: {
            latitude: 55.434,
            longitude: 24.928,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Kaunas': {
        location: {
            latitude: 54.898,
            longitude: 23.904,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Kalvarija': {
        location: {
            latitude: 54.414,
            longitude: 23.227,
        },
        imageSize: { w: 600, h: 719 }
    },
    'Kaišiadorys': {
        location: {
            latitude: 54.86,
            longitude: 24.454,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Jurbarkas': {
        location: {
            latitude: 55.078,
            longitude: 22.765,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Joniškis': {
        location: {
            latitude: 56.241,
            longitude: 23.615,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Joniškėlis': {
        location: {
            latitude: 56.023,
            longitude: 24.17,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Jonava': {
        location: {
            latitude: 55.074,
            longitude: 24.276,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Jieznas': {
        location: {
            latitude: 54.601,
            longitude: 24.175,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Ignalina': {
        location: {
            latitude: 55.34,
            longitude: 26.161,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Grigiškės': {
        location: {
            latitude: 54.671,
            longitude: 25.091,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Gelgaudiškis': {
        location: {
            latitude: 55.077,
            longitude: 22.976,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Garliava': {
        location: {
            latitude: 54.828,
            longitude: 23.875,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Gargždai': {
        location: {
            latitude: 55.718,
            longitude: 21.395,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Ežerėlis': {
        location: {
            latitude: 54.883,
            longitude: 23.599,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Elektrėnai': {
        location: {
            latitude: 54.787,
            longitude: 24.671,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Eišiškės': {
        location: {
            latitude: 54.169,
            longitude: 25,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Dusetos': {
        location: {
            latitude: 55.749,
            longitude: 25.846,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Dūkštas': {
        location: {
            latitude: 55.52,
            longitude: 26.322,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Druskininkai': {
        location: {
            latitude: 54.017,
            longitude: 23.977,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Daugai': {
        location: {
            latitude: 54.36,
            longitude: 24.346,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Akmenė': {
        location: {
            latitude: 56.246,
            longitude: 22.755,
        },
        imageSize: { w: 600, h: 725 }
    },
    'Alytus': {
        location: {
            latitude: 54.396,
            longitude: 24.046
        },
        imageSize: { w: 600, h: 726 }
    },
    'Anykščiai': {
        // su vainiku 
        location: {
            latitude: 55.526,
            longitude: 25.106
        },
        imageSize: { w: 600, h: 573 }
    },
    'Ariogala': {
        location: {
            latitude: 55.263,
            longitude: 23.483
        },
        imageSize: { w: 600, h: 676 }
    },
    'Baltoji Vokė': {
        location: {
            latitude: 54.454,
            longitude: 25.12
        },
        imageSize: { w: 600, h: 725 }
    },
    'Birštonas': {
        location: {
            latitude: 54.604,
            longitude: 24.034
        },
        imageSize: { w: 600, h: 725 }
    },
    'Biržai': {
        // su vainiku 
        location: {
            latitude: 56.2,
            longitude: 24.757
        },
        imageSize: { w: 600, h: 662 }
    }

};
