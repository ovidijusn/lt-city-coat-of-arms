import { defineStore } from 'pinia';
import cities from '../data/cities.json';


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
