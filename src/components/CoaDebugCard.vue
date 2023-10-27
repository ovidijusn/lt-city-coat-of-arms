<template>
  <v-sheet class="mx-auto pa-4" :width="600" border>
    <v-list lines="one">
      <v-list-item v-for="item in items" :key="item.title" :title="item.title" :subtitle="item.value + ''" />
    </v-list>
  </v-sheet>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useGameStore } from '@/stores/game';

const gameStore = useGameStore()

const items = computed(() => [
  { title: 'Date key', value: gameStore.dateKey },
  { title: 'Ready', value: gameStore.ready },
  { title: 'City', value: gameStore.cityName },
  { title: 'To Flip', value: gameStore.flipSequence.join(', ') },
  { title: 'Flipped', value: gameStore.flipped.join(', ') },
  { title: 'Flipped', value: gameStore.guesses.join(', ') },
  { title: 'Ended', value: gameStore.ended },
  { title: 'Won', value: gameStore.won },
  { title: 'Lost', value: gameStore.lost },
]);

</script>

<style scoped></style>