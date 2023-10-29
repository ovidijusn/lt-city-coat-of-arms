<template>
  <v-sheet class="mx-auto pa-4" :width="600" border>
    <v-row>
      <v-btn :disabled="cityIndex === 0" @click="changeCity(-1)">Atgal</v-btn>
      <v-select :model-value="gameStore.cityName" density="compact" :items="cityStore.allNames"
        @update:modelValue="gameStore.changeCity"></v-select>
      <v-btn :disabled="cityIndex === cityCount - 1" @click="changeCity(1)">Pirmyn</v-btn>
    </v-row>
    <a :href="`https://www.google.com/maps/@${gameStore.city.location.latitude},${gameStore.city.location.longitude},13.15z?entry=ttu`"
      target="_blank">{{ gameStore.cityName }}</a>
    <v-list lines="one">
      <v-list-item v-for="item in items" :key="item.title" :title="item.title" :subtitle="item.value + ''" />
    </v-list>
  </v-sheet>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useGameStore } from '@/stores/game';
import { useCityStore } from '@/stores/city';

const gameStore = useGameStore();
const cityStore = useCityStore();

const cityCount = computed(() => cityStore.allNames.length);
const items = computed(() => [
  { title: 'City count', value: cityCount.value },
  { title: 'Date key', value: gameStore.dateKey },
  { title: 'Ready', value: gameStore.ready },
  { title: 'City', value: gameStore.cityName },
  { title: 'Flip Sequence', value: gameStore.flipSequence.join(', ') },
  { title: 'Flipped', value: gameStore.flipped.join(', ') },
  { title: 'Guesses', value: gameStore.guesses.join(', ') },
  { title: 'Ended', value: gameStore.ended },
  { title: 'Won', value: gameStore.won },
  { title: 'Lost', value: gameStore.lost },
]);

const cityIndex = computed(() => cityStore.allNames.indexOf(gameStore.cityName));

function changeCity(delta: number) {
  gameStore.changeCity(cityStore.allNames[cityIndex.value + delta]);
}

</script>

<style scoped></style>