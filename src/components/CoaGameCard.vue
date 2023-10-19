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

import Card from 'primevue/card';
import AutoComplete from 'primevue/autocomplete';
import Button from 'primevue/button';

import CoaPuzzle from './CoaPuzzle.vue';
import { cities } from '../cities';
import { choice } from '../utils/random';

const cityOfChoice = choice(cities);

const city = ref(cityOfChoice);
console.log(cityOfChoice)

const items = ref([] as string[]);

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

