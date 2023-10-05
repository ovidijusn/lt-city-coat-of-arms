<template>
  <v-sheet>
    <v-autocomplete v-model="city" variant="outlined" density="compact" autofocus hide-details :items="cityNames"
      :custom-filter="cityFilter" :disabled="gameStore.ended"></v-autocomplete>

    <v-btn class="mt-1" variant="outlined" block :disabled="!canGuess" @click="guess">Spėti</v-btn>
  </v-sheet>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useGameStore } from '@/stores/game';
import { useCityStore } from '@/stores/city';
import { CityName } from '@/types';

const gameStore = useGameStore();
const cityStore = useCityStore();
const city = ref('');
const canGuess = computed(() => city.value && !gameStore.ended);
const cityNames = computed(() => cityStore.allNames.filter((name) => !gameStore.guesses.includes(name)));

function cityFilter(title: string, query: string): boolean {
  console.log(title, query)
  return title.toLowerCase().includes(query.toLowerCase());
}

function guess() {
  if (!gameStore.ended) {
    gameStore.addGuess(city.value as CityName);
    city.value = '';
  }
}

</script>

<style scoped></style>