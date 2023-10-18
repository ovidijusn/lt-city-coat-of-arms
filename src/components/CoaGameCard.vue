<template>
  <Card class="game-card">
    <template #header>
      <CoaPuzzle class="mx-auto" :city="city" />
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
import Card from 'primevue/card';
import AutoComplete from 'primevue/autocomplete';
import Button from 'primevue/button';
import { ref, computed } from 'vue';

import CoaPuzzle from './CoaPuzzle.vue';
import { cities } from '../cities';
const city = ref(cities[0]);

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
  width: 400px;
}
</style>

