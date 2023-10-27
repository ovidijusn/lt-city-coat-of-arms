import { defineStore } from 'pinia';

import { seed, chooseRandom } from '@/utils/random';
import { cities } from '@/cities';

interface State {
    dateKey: string,
    cityName: string,
    flipSequence: number[],
    guesses: string[]
}

function createState(): State {
    console.log('Init Game state')
    const city = chooseRandom(cities);
    const flipSequence: number[] = [];
    const orderSequece = [0, 1, 2, 3, 4, 5, 6];

    while (orderSequece.length > 0) {
        const idx = chooseRandom(orderSequece);
        orderSequece.splice(orderSequece.indexOf(idx), 1)
        flipSequence.push(idx)
    }

    return {
        dateKey: seed,
        cityName: city.name,
        flipSequence,
        guesses: []
    };
}

export const useGameStore = defineStore('game', {
    state: (): State => {
        return { dateKey: "", cityName: "", flipSequence: [], guesses: [] };
    },
    getters: {
        ready: (state) => !!state.cityName,
        flipped: (state) => state.flipSequence.slice(0, state.guesses.length + 1),
        ended: (state) => state.guesses.length === 6 || state.guesses.includes(state.cityName),
        won: (state) => state.guesses.includes(state.cityName),
        lost: (state) => state.guesses.length === 6 && !state.guesses.includes(state.cityName)
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
        addGuess(cityName: string) {
            if (this.guesses.length < 6) {
                this.guesses.push(cityName);
            }
        }
    },
    persist: true
});
