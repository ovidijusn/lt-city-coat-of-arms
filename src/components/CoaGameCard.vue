<template>
  <Card class="game-card">
    <template #header>
      <div style="  padding-top: 20px;">
        <CoaPuzzle class="mx-auto" />
      </div>

    </template>
    <template #title>
      <div class="p-inputgroup">
        <AutoComplete v-model="selectedCity" optionLabel="name" :suggestions="items" @complete="search" forceSelection />
        <Button :disabled="!canGuess" severity="success" label="Spėti" @click="check" />
      </div>
    </template>
    <template #content>
      <DataTable :value="guesses">
        <Column field="cityName" />
        <Column field="distance" />
        <Column field="direction" />
      </DataTable>
    </template>
  </Card>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

import Card from 'primevue/card';
import AutoComplete from 'primevue/autocomplete';
import Button from 'primevue/button';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

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
</script>

<style scoped>
.game-card {
  width: 350px;
}

:deep(thead.p-datatable-thead) {
  display: none;
}
</style>

../random