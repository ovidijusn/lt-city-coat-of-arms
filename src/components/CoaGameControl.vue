<template>
  <v-sheet>
    <v-autocomplete v-model="city" v-model:search="search" v-model:menu="menu" variant="outlined" density="compact"
      autofocus hide-details hide-no-data :items="gameStore.candidates.filter(cityFilter)" :disabled="gameStore.ended"
      :custom-filter="cityFilter" @keyup.enter="enter" @update:search="hideNames = hideNames && !$event"></v-autocomplete>

    <v-btn class="mt-1" variant="outlined" block :disabled="!canGuess" @click="guess">Spėti</v-btn>
  </v-sheet>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useGameStore } from '@/stores/game';
import { CityName } from '@/types';
import { normalize } from '@/utils/text';

const gameStore = useGameStore();
const city = ref('');
const search = ref('');
const menu = ref(false);
const hideNames = ref(false);
const canGuess = computed(() => city.value && !gameStore.ended);

function cityFilter(title: string): boolean {
  if (hideNames.value) {
    return false;
  }
  if (search.value && city.value == search.value) {
    return false;
  }
  const tileLower = title.toLowerCase();
  const queryLower = search.value.toLowerCase();
  return tileLower.includes(queryLower) || normalize(tileLower).includes(queryLower);
}

function enter() {
  if (hideNames.value) {
    hideNames.value = false;
  }
  if (menu.value) {
    guess();
  }
}

function guess() {
  if (canGuess.value) {
    gameStore.addGuess(city.value as CityName);
    city.value = '';
    search.value = ''
    hideNames.value = true
  }
}

</script>

<style scoped></style>