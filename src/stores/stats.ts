import { defineStore } from 'pinia';

type State = {
    total: number,
    wins: number[],
    streak: number,
    longestStreak: number,
};

export const useStatsStore = defineStore('stats', {
    state: (): State => ({
        total: 0,
        wins: [0, 0, 0, 0, 0, 0],
        streak: 0,
        longestStreak: 0
    }),
    getters: {
        totalWins: (state) => state.wins.reduce((accum, item) => accum + item, 0),
    },
    actions: {
        win(guessCount: number) {
            this.wins[guessCount - 1]++;
            this.total++;
            this.streak++;
            this.longestStreak = Math.max(this.longestStreak, this.streak);
        },
        loose() {
            this.total++;
            this.streak = 0;
        }
    },
    persist: true
});