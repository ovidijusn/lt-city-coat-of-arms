<template>
  <v-sheet>
    <v-table density="compact">
      <thead>
        <tr>
          <th colspan="3">
            Spėjimai({{ gameStore.guesses.length }}/6)
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="guess in guesses">
          <td>{{ guess.cityName }}</td>
          <td></td>
          <td>{{guess.arrow}}</td>
        </tr>
      </tbody>
    </v-table>
  </v-sheet>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useGameStore } from '@/stores/game';
import { cityByName } from '@/cities';
import { emojiDirection } from '@/utils/map';

const gameStore = useGameStore();
const city = computed(() => cityByName(gameStore.cityName));
function _arrow(cityName) {
  const guessCity = cityByName(cityName);
  return emojiDirection(guessCity, city.value)
}
const guesses = computed(() => gameStore.guesses.map((cityName) => ({ cityName, arrow: _arrow(cityName) })));

</script>

<style scoped></style>