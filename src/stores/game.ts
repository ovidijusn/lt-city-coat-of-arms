import { defineStore } from 'pinia';

import { seed, chooseRandom } from '@/utils/random';
import { useCityStore } from '@/stores/city';
import { useStatsStore } from '@/stores/stats';
import { CityName } from '@/types';

interface State {
    dateKey: string,
    cityName: CityName,
    flipSequence: number[],
    flipped: number[],
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

    const flipped = [...flipSequence.splice(0, 1)]

    return {
        dateKey: seed,
        cityName: city,
        flipSequence,
        flipped,
        guesses: []
    };
}

export const useGameStore = defineStore('game', {
    state: (): State => {
        return { dateKey: "", cityName: "Ariogala", flipSequence: [], flipped: [], guesses: [] };
    },
    getters: {
        ready: (state) => !!state.cityName,
        ended: (state) => state.guesses.length === 6 || state.guesses.includes(state.cityName),
        won: (state) => state.guesses.includes(state.cityName),
        lost: (state) => state.guesses.length === 6 && !state.guesses.includes(state.cityName),

        city: (state) => useCityStore().city(state.cityName)
    },
    actions: {
        resetIfNeeded() {
            if (this.dateKey !== seed) {
                const { dateKey, cityName, flipSequence, flipped, guesses } = createState();
                this.dateKey = dateKey;
                this.cityName = cityName;
                this.flipSequence = flipSequence;
                this.flipped = flipped;
                this.guesses = guesses;
            }
        },
        addGuess(cityName: CityName) {
            if (this.guesses.length < 6) {
                this.guesses.push(cityName);

                if (this.won) {
                    useStatsStore().win(this.guesses.length);
                } else if (this.lost) {
                    useStatsStore().loose();
                } else {
                    this.flipped.push(...this.flipSequence.splice(0, 1));
                }
            }
        }
    },
    persist: true
});