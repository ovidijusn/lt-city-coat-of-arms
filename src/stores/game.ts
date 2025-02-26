import { defineStore } from "pinia";

import rnd from "../data/random.json";
import { chooseRandom, seed } from "@/utils/random";
import { gGuessed, gLost, gWon } from "@/utils/gtag";
import { useCityStore } from "@/stores/city";
import { useStatsStore } from "@/stores/stats";
import { CityName } from "@/types";

interface State {
    dateKey: string;
    cityName: CityName;
    flipSequence: number[];
    flipped: number[];
    guesses: CityName[];
}

interface Rnd {
    city: number;
    tiles: number[];
}

interface DatedRnd {
    [key: string]: Rnd;
}

function createState(cityName: CityName | undefined): State {
    console.log("Init Game state");

    const preselected = (rnd as DatedRnd)[seed];
    let city;
    if (cityName) {
        city = cityName;
    } else if (preselected) {
        city = useCityStore().allNames[preselected.city];
    } else {
        city = chooseRandom(useCityStore().allNames as CityName[]);
    }

    const flipSequence: number[] = [];
    const orderSequece = [0, 1, 2, 3, 4, 5];

    if (preselected) {
        preselected.tiles.forEach((idx) => flipSequence.push(idx));
    } else {
        while (orderSequece.length > 0) {
            const idx = chooseRandom(orderSequece);
            orderSequece.splice(orderSequece.indexOf(idx), 1);
            flipSequence.push(idx);
        }
    }

    const flipped = [...flipSequence.splice(0, 1)];

    return {
        dateKey: seed,
        cityName: city,
        flipSequence,
        flipped,
        guesses: [],
    };
}

export const useGameStore = defineStore("game", {
    state: (): State => {
        return {
            dateKey: "",
            cityName: "Ariogala",
            flipSequence: [],
            flipped: [],
            guesses: [],
        };
    },
    getters: {
        ready: (state) => !!state.cityName,
        ended: (state) =>
            state.guesses.length === 6 || state.guesses.includes(state.cityName),
        won: (state) => state.guesses.includes(state.cityName),
        lost: (state) =>
            state.guesses.length === 6 && !state.guesses.includes(state.cityName),

        city: (state) => useCityStore().city(state.cityName),
        candidates(state: State) {
            if (this.ended) {
                return [];
            } else {
                return useCityStore().allNames.filter(
                    (name) => !state.guesses.includes(name),
                );
            }
        },
    },
    actions: {
        resetIfNeeded() {
            if (this.dateKey !== seed) {
                const { dateKey, cityName, flipSequence, flipped, guesses } =
                    createState(undefined);
                this.dateKey = dateKey;
                this.cityName = cityName;
                this.flipSequence = flipSequence;
                this.flipped = flipped;
                this.guesses = guesses;
            }
        },
        changeCity(cityName: CityName) {
            const { dateKey, flipSequence, flipped, guesses } = createState(cityName);
            this.dateKey = dateKey;
            this.cityName = cityName;
            this.flipSequence = flipSequence;
            this.flipped = flipped;
            this.guesses = guesses;
        },
        addGuess(cityName: CityName) {
            if (this.guesses.length < 6) {
               
                this.guesses.push(cityName);
                if (this.won) {
                    useStatsStore().win(this.guesses.length);
                    gWon(this.guesses.length, this.cityName);
                } else if (this.lost) {
                    useStatsStore().loose();
                    gLost(this.cityName);
                } else {
                    this.flipped.push(...this.flipSequence.splice(0, 1));
                    gGuessed(this.guesses.length, this.cityName);
                }
            }
        },
    },
    persist: true,
});
