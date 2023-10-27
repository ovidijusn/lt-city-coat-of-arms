import { defineStore } from 'pinia';

import { seed, chooseRandom } from '@/utils/random';
import { useCityStore } from '@/stores/city';
import { CityName } from '@/types';

interface State {
    dateKey: string,
    cityName: CityName,
    flipSequence: number[],
    guesses: CityName[],
}

function createState(): State {
    console.log('Init Game state')
    const city = chooseRandom(useCityStore().allNames as CityName[]);
    const flipSequence: number[] = [];
    const orderSequece = [0, 1, 2, 3, 4, 5];

    while (orderSequece.length > 0) {
        const idx = chooseRandom(orderSequece);
        orderSequece.splice(orderSequece.indexOf(idx), 1)
        flipSequence.push(idx)
    }

    return {
        dateKey: seed,
        cityName: city,
        flipSequence,
        guesses: []
    };
}

export const useGameStore = defineStore('game', {
    state: (): State => {
        return { dateKey: "", cityName: "Ariogala", flipSequence: [], guesses: [] };
    },
    getters: {
        ready: (state) => !!state.cityName,
        flipped: (state) => state.guesses.includes(state.cityName) ? state.flipSequence : state.flipSequence.slice(0, state.guesses.length + 1),
        ended: (state) => state.guesses.length === 6 || state.guesses.includes(state.cityName),
        won: (state) => state.guesses.includes(state.cityName),
        lost: (state) => state.guesses.length === 6 && !state.guesses.includes(state.cityName),

        city: (state) => useCityStore().city(state.cityName)
    },
    actions: {
        resetIfNeeded() {
            if (this.dateKey !== seed) {
                const { dateKey, cityName, flipSequence, guesses } = createState();
                this.dateKey = dateKey;
                this.cityName = cityName;
                this.flipSequence = flipSequence;
                this.guesses = guesses;
            }
        },
        addGuess(cityName: CityName) {
            if (this.guesses.length < 6) {
                this.guesses.push(cityName);
            }
        }
    },
    persist: true
});
