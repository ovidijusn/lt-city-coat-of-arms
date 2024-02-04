<template>
  <v-sheet>
    <v-table density="compact">
      <thead>
        <tr>
          <th colspan="4" class="text-center">
            Spėjimai({{ gameStore.guesses.length }}/6)
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(guess, idx) in guesses.reverse()" :key="guess.cityName">
          <td>{{ guesses.length - (idx) }}/6</td>
          <td>
            <CoaCity :name="guess.cityName" />
          </td>
          <td>{{ guess.distance ? (guess.distance + 'km') : 0 }}</td>
          <td>{{ guess.arrow }}</td>
        </tr>
      </tbody>
    </v-table>
  </v-sheet>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useGameStore } from '@/stores/game';
import { useCityStore } from '@/stores/city';
import { emojiDirection, distanceBetween } from '@/utils/map';
import { CityName } from '@/types';
import CoaCity from '@/components/CoaCity.vue';

const gameStore = useGameStore();
const cityStore = useCityStore();

function _row(cityName: CityName) {
  const guessCity = cityStore.city(cityName);
  const arrow = emojiDirection(guessCity, gameStore.city);
  const distance = Math.round(distanceBetween(guessCity, gameStore.city));
  return { cityName, arrow, distance };
}
const guesses = computed(() => gameStore.guesses.map((cityName) => _row(cityName)));

</script>

<style scoped></style>