<template>
  <Card class="game-card">
    <template #header>
      <div style="  padding-top: 20px;">
        <CoaPuzzle class="mx-auto" :city="city" />
      </div>
      
    </template>
    <template #title>
      <div class="p-inputgroup">
        <AutoComplete v-model="value" :suggestions="items" @complete="search" forceSelection />
        <Button :disabled="!canGuess" severity="success" label="Spėti" />
      </div>
    </template>
  </Card>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import random from 'random'

import Card from 'primevue/card';
import AutoComplete from 'primevue/autocomplete';
import Button from 'primevue/button';


import CoaPuzzle from './CoaPuzzle.vue';
import { cities } from '../cities';



const today = new Date();
const seed = `${today.getFullYear()}${today.getMonth()}${today.getDay()}`;

const rnd = random.clone(seed);
const whichCity = rnd.int(0, cities.length - 1);
console.log(seed, whichCity);
const city = ref(cities[whichCity]);

const items = ref(['aa', 'ab', 'ba', 'dd']);

const value = ref('');
const canGuess = computed(() => value.value);

function search(event: any) {
  items.value = cities
    .map((city) => city.name)
    .filter((name) => name.toLowerCase().startsWith(event.query.toLowerCase()));
}
</script>



<style scoped>
.game-card {
  width: 350px;
}
</style>

