import { defineStore } from 'pinia';
import { computed, reactive, ref } from 'vue';

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
    state: () => createState(),
    getters: {
        
    },
    actions: {
        addGuess(cityName: string) {
            this.guesses.push(cityName);
        }
    }

    , persist: true
});
