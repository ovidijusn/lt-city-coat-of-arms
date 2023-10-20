<template>
  <v-card class="game-card">
    <CoaPuzzle class="mx-auto" />



    <div class="p-inputgroup">
      <v-autocomplete :items="items" item-title="name" v-model="selectedCity" return-object append-icon="mdi-check-outline" @keyup.enter="test" />
      <AutoComplete v-model="selectedCity" optionLabel="name" :suggestions="items" @complete="search" forceSelection />
      <Button :disabled="!canGuess" severity="success" label="Spėti" @click="check" />
    </div>

    <template #content>
      <DataTable :value="guesses">
        <Column field="cityName" />
        <Column field="distance" />
        <Column field="direction" />
      </DataTable>
    </template>
  </v-card>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { VCard } from 'vuetify/components/VCard';
import { VAutocomplete } from 'vuetify/components/VAutocomplete';


import CoaPuzzle from './CoaPuzzle.vue';

import { cities } from '@/cities';
import { initNew, guess, getGuesses, alreadyGuessed } from '@/game';

initNew();

const guesses = getGuesses();
const items = ref(cities);

const selectedCity = ref();
const canGuess = computed(() => selectedCity.value && guesses.length < 6);

function search(event: any) {
  items.value = cities
    .filter((city) => !alreadyGuessed(city))
    .filter((city) => city.name.toLowerCase().indexOf(event.query.toLowerCase()) >= 0);
}

function check() {
  guess(selectedCity.value);
  selectedCity.value = undefined
}

function test(){
  console.log(selectedCity.value)
}
</script>

<style scoped>
.game-card {
  width: 350px;
}
</style>

../random