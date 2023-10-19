import { reactive } from 'vue';

import { GameState } from "@/types";
import { cities } from '@/cities';
import { choice } from '@/random';
import { City, FragmentState, Guess } from "./types";
import { direction, distance } from '@/map';

let gameState: GameState;

export function initNew() {
    const city = choice(cities);
    const fragmentStatesSorted = [];
    const fragmentStates = [];
    for (let index = 0; index < 6; index++) {
        fragmentStatesSorted.push({ index, flipped: false });
    }
    while (fragmentStatesSorted.length > 0) {
        const state = choice(fragmentStatesSorted);
        fragmentStates.push(state);
        fragmentStatesSorted.splice(fragmentStatesSorted.indexOf(state), 1);
    }
    fragmentStates[0].flipped = true;
    gameState = reactive({ city, fragmentStates, guesses: [] });
}

export function getGameState(): GameState {
    return gameState;
}

export function getGuesses(): Guess[] {
    return gameState.guesses;
}

export function getFragmentState(idx: number): FragmentState | undefined {
    return gameState.fragmentStates.find((state) => state.index === idx);
}

export function guess(city: City) {
    gameState.guesses.push({
        cityName: city.name,
        distance: distance(gameState.city, city),
        direction: direction(city, gameState.city)
    });
    if (gameState.guesses.length < 6) {
        gameState.fragmentStates[gameState.guesses.length].flipped = true;
    }
}

export function alreadyGuessed(city: City): boolean {
    return gameState.guesses.filter((guess) => guess.cityName === city.name).length > 0;
}