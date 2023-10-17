<script setup lang="ts">
import Card from 'primevue/card';
import { ref } from 'vue';

import CoaPuzzle from './CoaPuzzle.vue';
import { cities } from '../cities';
const city = ref(cities[0]);

</script>

<template>
  <Card class="game-card">
    <template #header>
      <CoaPuzzle class="mx-auto" :city="city" />
    </template>
  </Card>
</template>

<style scoped>
.game-card {
  width: 400px;
}
</style>

