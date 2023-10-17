<template>
  <div class="flipping-board">
    <CoaPuzzlePeace v-for="card in cards" class="fragment" :card="card" :image-url="city.image"
      :style="{ top: `${card.offset.y}px`, left: `${card.offset.x}px` }" @click="card.flipped = !card.flipped" />
  </div>
</template>

<script setup lang="ts">
import CoaPuzzlePeace from './CoaPuzzlePeace.vue';

import { ref, PropType } from 'vue';
import { City } from '../cities';
import { Card, Offset } from './types'

defineProps({
  city: {
    type: Object as PropType<City>,
    required: true
  }
});

function moveX(idx: number): number {
  return (idx % 3) * 100
}
function moveY(idx: number): number {
  return Math.floor(idx / 3) * 100
}
function offset(idx: number): Offset {
  return {
    x: moveX(idx),
    y: moveY(idx)
  }
}

const cards = ref([] as Card[]);
  for (let idx = 0; idx < 9; idx++) {
    cards.value[idx] = { flipped: true, offset: offset(idx) };
  }
</script>

<style scoped>
.flipping-board {
  position: relative;
  width: 300px;
  height: 400px;
}

.flipping-board>.fragment {
  position: absolute;
  display: block;
}
</style>
