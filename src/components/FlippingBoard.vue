<script setup lang="ts">
import FlippingCard from './FlippingCard.vue';

import { ref, computed, PropType } from 'vue';
import { City } from '../cities';
import { Card, Offset } from './types'

const props = defineProps({
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

const imageUrl = computed(() => '/lt-city-coat-of-arms/coat-of-arms/' + props.city.image);
</script>

<template>
  <div class="flipping-board">
    <flipping-card v-for="card in cards" class="fragment" :card="card" :image-url="imageUrl"
      :style="{ top: `${card.offset.y}px`, left: `${card.offset.x}px` }" @click="card.flipped = !card.flipped" />
  </div>
</template>

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
